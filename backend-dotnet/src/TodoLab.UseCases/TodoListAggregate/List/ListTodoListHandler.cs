using TodoLab.Core.Mediators;
using TodoLab.Core.Pagination;
using TodoLab.Core.Results;

namespace TodoLab.UseCases.TodoListAggregate.List;

public class ListTodoListHandler(IListTodoListService service) : IQueryHandler<ListTodoListQuery, Result<PagedList<TodoListDto>>>
{
    public async Task<Result<PagedList<TodoListDto>>> Handle(ListTodoListQuery request, CancellationToken cancellationToken)
    {
        return await service.ListAsync(request, cancellationToken);
    }
}
