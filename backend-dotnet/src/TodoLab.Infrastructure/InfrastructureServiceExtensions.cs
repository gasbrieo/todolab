using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TodoLab.Core.TodoListAggregate;
using TodoLab.Infrastructure.Persistence;
using TodoLab.Infrastructure.Persistence.Repositories;
using TodoLab.Infrastructure.Persistence.Services;
using TodoLab.UseCases.TodoListAggregate.List;

namespace TodoLab.Infrastructure;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options =>
            options.UseInMemoryDatabase("TodoLab"));

        services.AddScoped<ITodoListRepository, TodoListRepository>();
        services.AddScoped<IListTodoListService, ListTodoListService>();

        return services;
    }
}
