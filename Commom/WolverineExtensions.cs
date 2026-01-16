using System.Net.Sockets;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;
using Polly;
using RabbitMQ.Client;
using RabbitMQ.Client.Exceptions;
using Wolverine;
using Wolverine.RabbitMQ;

namespace Commom;

public static class WolverineExtensions
{
    public static async Task UseWolverineWithRabbitMqAsync(
        this IHostApplicationBuilder builder,
        Action<WolverineOptions> configureMessaging
    )
    {
        var retryPolicy = Policy
            .Handle<BrokerUnreachableException>()
            .Or<SocketException>()
            .WaitAndRetryAsync(
                retryCount: 5,
                retryAttempt => TimeSpan.FromSeconds(Math.Pow(2, retryAttempt)), 
                (exception, timeSpan, retryCount) =>
                {
                    Console.WriteLine($"Retry attempt {retryCount}, retrying in {timeSpan}.");
                });

        await retryPolicy.ExecuteAsync(async () =>
        {
            var endpoint = builder.Configuration.GetConnectionString("rabbitmq")
                           ?? throw new InvalidOperationException("messaging connection string not found");

            var factory = new ConnectionFactory
            {
                Uri = new Uri(endpoint)
            };
    
            await using var connection = await factory.CreateConnectionAsync();
        });
        
        
        builder.Services.AddOpenTelemetry().WithTracing(providerBuilder =>
        {
            providerBuilder.SetResourceBuilder(ResourceBuilder.CreateDefault()
                    .AddService(builder.Environment.ApplicationName))
                .AddSource("Wolverine");
        });
        
        builder.UseWolverine(options =>
        {
            options.UseRabbitMqUsingNamedConnection("rabbitmq")
                .AutoProvision()
                .DeclareExchange("questions");

            configureMessaging(options);

        });
    }
}