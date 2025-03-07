using TodoLab.Core.Mediators;
using TodoLab.Core.Results;

namespace TodoLab.UseCases.TodoListAggregate.Update;

public record UpdateTodoListCommand(Guid Id, string Name) : ICommand<Result<TodoListDto>>;
