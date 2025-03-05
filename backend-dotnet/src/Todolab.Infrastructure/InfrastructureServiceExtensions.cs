using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TodoLab.Core.Spaces;
using TodoLab.Infrastructure.Persistence;
using TodoLab.Infrastructure.Persistence.Repositories;

namespace TodoLab.Infrastructure;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options =>
            options.UseInMemoryDatabase("TodoLab"));

        services.AddScoped<ISpaceRepository, SpaceRepository>();

        return services;
    }
}
