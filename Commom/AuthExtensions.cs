using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace Commom;

public static class AuthExtensions
{
    public static IServiceCollection AddKeycloakAuthentication(this IServiceCollection services)
    {
        services.AddAuthentication()
            .AddKeycloakJwtBearer(serviceName: "keycloak", realm: "notnull", options =>
            {
                options.RequireHttpsMetadata = false;
                options.Audience = "notnull";

                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuers = [
                        "http://localhost:6001/realms/notnull",
                        "http://keycloak/realms/notnull",
                        "http://id.notnull.local:6001/realms/notnull"
                    ]
                };
            });
        return services;
    }
}