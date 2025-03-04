using System.Reflection;
using FluentValidation;
using Todolab.UseCases;

namespace Todolab.Presentation.Configurations;

public static class FluentValidationConfigs
{
    public static IServiceCollection AddFluentValidationConfigs(this IServiceCollection services)
    {
        var assemblies = new[]
        {
            Assembly.GetAssembly(typeof(IUseCasesMarker))
        };

        services.AddValidatorsFromAssemblies(assemblies);

        return services;
    }
}
