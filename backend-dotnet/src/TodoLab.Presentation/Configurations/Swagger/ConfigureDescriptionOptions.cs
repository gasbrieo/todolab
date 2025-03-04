using System.Reflection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace TodoLab.Presentation.Configurations.Swagger;

public class ConfigureDescriptionOptions : IConfigureOptions<SwaggerGenOptions>
{
    public void Configure(SwaggerGenOptions options)
    {
        var assembly = Assembly.GetExecutingAssembly();

        var info = new OpenApiInfo()
        {
            Title = assembly.GetCustomAttribute<AssemblyTitleAttribute>()!.Title,
            Version = "v1",
            Description = assembly.GetCustomAttribute<AssemblyDescriptionAttribute>()!.Description,
        };

        options.SwaggerDoc("v1", info);
    }
}
