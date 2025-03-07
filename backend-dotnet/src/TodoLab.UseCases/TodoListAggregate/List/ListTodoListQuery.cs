using TodoLab.Core.Mediators;
using TodoLab.Core.Pagination;
using TodoLab.Core.Results;

namespace TodoLab.UseCases.TodoListAggregate.List;

public record ListTodoListQuery(int PageNumber, int PageSize) : IQuery<Result<PagedList<TodoListDto>>>;
