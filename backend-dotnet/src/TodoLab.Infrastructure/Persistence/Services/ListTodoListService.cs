using TodoLab.Core.Pagination;
using TodoLab.Infrastructure.Persistence.Extensions;
using TodoLab.UseCases.TodoListAggregate;
using TodoLab.UseCases.TodoListAggregate.List;

namespace TodoLab.Infrastructure.Persistence.Services;

public class ListTodoListService(AppDbContext context) : IListTodoListService
{
    public async Task<PagedList<TodoListDto>> ListAsync(ListTodoListQuery query, CancellationToken cancellationToken = default)
    {
        return await context.TodoLists
            .Select(e => new TodoListDto(e.Id, e.Name))
            .ToPagedListAsync(query.PageNumber, query.PageSize, cancellationToken);
    }
}