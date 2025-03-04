using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Todolab.Core.Spaces;
using Todolab.Infrastructure.Persistence;
using Todolab.Infrastructure.Persistence.Repositories;

namespace Todolab.Infrastructure;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options =>
            options.UseInMemoryDatabase("Todolab"));

        services.AddScoped<ISpaceRepository, SpaceRepository>();

        return services;
    }
}
