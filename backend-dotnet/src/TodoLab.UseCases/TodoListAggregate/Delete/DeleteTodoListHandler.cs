using TodoLab.Core.Mediators;
using TodoLab.Core.Results;
using TodoLab.Core.TodoListAggregate;

namespace TodoLab.UseCases.TodoListAggregate.Delete;

public class DeleteTodoListHandler(ITodoListRepository repository) : ICommandHandler<DeleteTodoListCommand, Result>
{
    public async Task<Result> Handle(DeleteTodoListCommand request, CancellationToken cancellationToken)
    {
        var todoList = await repository.GetByIdAsync(request.Id, cancellationToken);

        if (todoList is null)
        {
            return Result.NotFound();
        }

        await repository.DeleteAsync(todoList, cancellationToken);

        return Result.NoContent();
    }
}