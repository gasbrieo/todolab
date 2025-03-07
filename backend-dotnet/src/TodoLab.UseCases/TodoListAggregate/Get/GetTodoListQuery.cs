using TodoLab.Core.Mediators;
using TodoLab.Core.Results;

namespace TodoLab.UseCases.TodoListAggregate.Get;

public record GetTodoListQuery(Guid Id) : IQuery<Result<TodoListDto>>;
