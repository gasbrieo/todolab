using TodoLab.Infrastructure;

namespace TodoLab.Presentation.Configurations;

public static class ServiceConfigs
{
    public static IServiceCollection AddServiceConfigs(this IServiceCollection services)
    {
        return services
            .AddFluentValidationConfigs()
            .AddMediatrConfigs()
            .AddInfrastructureServices();
    }
}
