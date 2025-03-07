using TodoLab.Core.Mediators;
using TodoLab.Core.Results;
using TodoLab.Core.TodoListAggregate;

namespace TodoLab.UseCases.TodoListAggregate.Get;

public class GetTodoListHandler(ITodoListRepository repository) : IQueryHandler<GetTodoListQuery, Result<TodoListDto>>
{
    public async Task<Result<TodoListDto>> Handle(GetTodoListQuery request, CancellationToken cancellationToken)
    {
        var todoList = await repository.GetByIdAsync(request.Id, cancellationToken);

        if (todoList is null)
        {
            return Result.NotFound();
        }

        return new TodoListDto(todoList.Id, todoList.Name);
    }
}