using System.Reflection;
using Asp.Versioning.ApiExplorer;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;
using TodoLab.Presentation.Configurations.Swagger;

namespace TodoLab.Presentation.Configurations;

public static class SwaggerConfigs
{
    public static IServiceCollection AddSwaggerConfigs(this IServiceCollection services)
    {
        return services
            .AddSwaggerGen(options =>
            {
                options.ConfigureXmlDocs();
            })
            .AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureDescriptionOptions>();
    }

    public static IApplicationBuilder UseSwaggerConfigs(this IApplicationBuilder app)
    {
        var provider = app.ApplicationServices.GetRequiredService<IApiVersionDescriptionProvider>();

        return app
            .UseSwagger()
            .UseSwaggerUI(options =>
            {
                foreach (var groupName in provider.ApiVersionDescriptions.Select(d => d.GroupName))
                {
                    options.SwaggerEndpoint($"/swagger/{groupName}/swagger.json", groupName.ToUpper());
                }
            });
    }

    private static void ConfigureXmlDocs(this SwaggerGenOptions options)
    {
        var assemblies = AppDomain.CurrentDomain.GetAssemblies();

        foreach (var assembly in assemblies)
        {
            var xmlPath = Path.Combine(AppContext.BaseDirectory, $"{assembly.GetName().Name}.xml");

            if (File.Exists(xmlPath))
            {
                options.IncludeXmlComments(xmlPath);
            }
        }
    }
}