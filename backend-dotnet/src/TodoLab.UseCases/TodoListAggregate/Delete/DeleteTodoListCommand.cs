using TodoLab.Core.Mediators;
using TodoLab.Core.Results;

namespace TodoLab.UseCases.TodoListAggregate.Delete;

public record DeleteTodoListCommand(Guid Id) : ICommand<Result>;
