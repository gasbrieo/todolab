namespace TodoLab.Core.TodoListAggregate;

public interface ITodoListRepository
{
    Task<IEnumerable<TodoList>> GetAllAsync(CancellationToken cancellationToken = default);

    Task<TodoList?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);

    Task<TodoList> AddAsync(TodoList todoList, CancellationToken cancellationToken = default);

    Task<TodoList> UpdateAsync(TodoList todoList, CancellationToken cancellationToken = default);

    Task DeleteAsync(TodoList todoList, CancellationToken cancellationToken = default);
}
