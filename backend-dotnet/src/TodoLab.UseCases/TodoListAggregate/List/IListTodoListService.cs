using TodoLab.Core.Pagination;

namespace TodoLab.UseCases.TodoListAggregate.List;

public interface IListTodoListService
{
    Task<PagedList<TodoListDto>> ListAsync(ListTodoListQuery query, CancellationToken cancellationToken = default);
}