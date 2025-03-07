using Microsoft.EntityFrameworkCore;
using TodoLab.Core.TodoListAggregate;

namespace TodoLab.Infrastructure.Persistence.Repositories;

public class TodoListRepository(AppDbContext context) : ITodoListRepository
{
    public async Task<IEnumerable<TodoList>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await context.TodoLists.ToListAsync(cancellationToken);
    }

    public Task<TodoList?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return context.TodoLists.FirstOrDefaultAsync(todoList => todoList.Id == id, cancellationToken);
    }

    public async Task<TodoList> AddAsync(TodoList todoList, CancellationToken cancellationToken = default)
    {
        await context.TodoLists.AddAsync(todoList, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return todoList;
    }

    public async Task<TodoList> UpdateAsync(TodoList todoList, CancellationToken cancellationToken = default)
    {
        context.TodoLists.Update(todoList);
        await context.SaveChangesAsync(cancellationToken);
        return todoList;
    }

    public Task DeleteAsync(TodoList todoList, CancellationToken cancellationToken = default)
    {
        context.TodoLists.Remove(todoList);
        return context.SaveChangesAsync(cancellationToken);
    }
}
