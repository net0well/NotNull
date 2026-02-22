using System.Runtime.CompilerServices;
using Microsoft.Extensions.Hosting;

var builder = DistributedApplication.CreateBuilder(args);

var compose = builder.AddDockerComposeEnvironment("production")
    .WithDashboard(dash => dash.WithHostPort(8080));

var keycloak = builder.AddKeycloak("keycloak", 6001)
    .WithDataVolume("keycloak-data")
    .WithRealmImport("../infra/realms")
    .WithEnvironment("KC_HTTP_ENABLED", "true")
    .WithEnvironment("KC_HOSTNAME_STRICT", "false")
    .WithEnvironment("VIRTUAL_HOST", "id.notnull.local")
    .WithEnvironment("VIRTUAL_PORT", "8080");

var postgres = builder.AddPostgres("postgres", port: 5432)
    .WithDataVolume("postgres-data")
    .WithPgAdmin();

var typesenseApiKey = builder.AddParameter("typesense-api-key", secret: true);

var typesense = builder.AddContainer("typesense", "typesense/typesense", "29.0")
    .WithVolume("typesense-data", "/data")
    .WithEnvironment("TYPESENSE_DATA_DIR", "/data")
    .WithEnvironment("TYPESENSE_API_KEY", typesenseApiKey)
    .WithEnvironment("TYPESENSE_ENABLE_CORS", "true")
    .WithEnvironment("TYPESENSE_CORS_ORIGINS", "http://localhost:3000")
    .WithHttpEndpoint(8108, 8108, name: "typesense");

var typesenseContainer = typesense.GetEndpoint("typesense");

var questionDb = postgres.AddDatabase("questiondb");

var rabbitmq = builder.AddRabbitMQ("rabbitmq")
    .WithDataVolume("rabbitmq-data")
    .WithManagementPlugin(port: 15672);

var questionService = builder.AddProject<Projects.QuestionService>("question-svc")
    .WithReference(keycloak)
    .WithReference(questionDb)
    .WithReference(rabbitmq)
    .WaitFor(keycloak)
    .WaitFor(questionDb)
    .WaitFor(rabbitmq);

var searchService = builder.AddProject<Projects.SearchService>("search-svc")
    .WithEnvironment("typesense-api-key", typesenseApiKey)
    .WithReference(typesenseContainer)
    .WithReference(rabbitmq)
    .WaitFor(typesense)
    .WaitFor(rabbitmq);

var yarp = builder.AddYarp("gateway")
    .WithReference(questionService)
    .WithReference(searchService)
    .WithHostPort(8001)
    .WithConfiguration(yarpBuilder =>
    {
        yarpBuilder.AddRoute("/questions/{**catch-all}", questionService);
        yarpBuilder.AddRoute("/test/{**catch-all}", questionService);
        yarpBuilder.AddRoute("/tags/{**catch-all}", questionService);
        yarpBuilder.AddRoute("/search/{**catch-all}", searchService);
    })
    .WithEnvironment("VIRTUAL_HOST", "api.notnull.local")
    .WithEnvironment("VIRTUAL_PORT", "8001")
    .WaitFor(questionService)
    .WaitFor(searchService);


var webapp = builder.AddJavaScriptApp("webapp", "../webapp")
    .WithReference(keycloak)
    .WithHttpEndpoint(env: "PORT", port: 3000);


if (!builder.Environment.IsDevelopment())
{
    builder.AddContainer("nginx-proxy", "nginxproxy/nginx-proxy", "1.8")
        .WithEndpoint(80, 80, "nginx", isExternal: true)
        .WithBindMount("/var/run/docker.sock", "/tmp/docker.sock", true);
}

builder.Build().Run();