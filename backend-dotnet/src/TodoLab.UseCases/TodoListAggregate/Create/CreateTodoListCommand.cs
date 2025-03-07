using TodoLab.Core.Mediators;
using TodoLab.Core.Results;

namespace TodoLab.UseCases.TodoListAggregate.Create;

public record CreateTodoListCommand(string Name) : ICommand<Result<TodoListDto>>;
