using TodoLab.Core.Mediators;
using TodoLab.Core.Results;
using TodoLab.Core.TodoListAggregate;

namespace TodoLab.UseCases.TodoListAggregate.Create;

public class CreateTodoListHandler(ITodoListRepository repository) : ICommandHandler<CreateTodoListCommand, Result<TodoListDto>>
{
    public async Task<Result<TodoListDto>> Handle(CreateTodoListCommand request, CancellationToken cancellationToken)
    {
        var todoList = new TodoList(request.Name);

        todoList = await repository.AddAsync(todoList, cancellationToken);

        return new TodoListDto(todoList.Id, todoList.Name);
    }
}