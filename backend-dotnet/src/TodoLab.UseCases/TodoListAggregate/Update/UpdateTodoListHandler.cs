using TodoLab.Core.Mediators;
using TodoLab.Core.Results;
using TodoLab.Core.TodoListAggregate;

namespace TodoLab.UseCases.TodoListAggregate.Update;

public class UpdateTodoListHandler(ITodoListRepository repository) : ICommandHandler<UpdateTodoListCommand, Result<TodoListDto>>
{
    public async Task<Result<TodoListDto>> Handle(UpdateTodoListCommand request, CancellationToken cancellationToken)
    {
        var todoList = await repository.GetByIdAsync(request.Id, cancellationToken);

        if (todoList is null)
        {
            return Result.NotFound();
        }

        todoList.Name = request.Name;

        todoList = await repository.UpdateAsync(todoList, cancellationToken);

        return new TodoListDto(todoList.Id, todoList.Name);
    }
}