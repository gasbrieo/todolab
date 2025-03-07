using TodoLab.Core.TodoListAggregate;
using TodoLab.Infrastructure.Persistence.Repositories;

namespace TodoLab.IntegrationTests.Repositories;

public class TodoListRepositoryTests : IClassFixture<AppDbContextFixture>
{
    private readonly TodoListRepository _repository;

    public TodoListRepositoryTests(AppDbContextFixture fixture)
    {
        _repository = new(fixture.DbContext);
        fixture.ResetDatabase();
    }

    [Fact]
    public async Task GetAllAsync_WhenHaveExistingTodoLists_ShouldReturnExpectedAmount()
    {
        // Arrange
        await _repository.AddAsync(new TodoList("Work"));
        await _repository.AddAsync(new TodoList("Study"));

        // Act
        var todoLists = await _repository.GetAllAsync();

        // Assert
        Assert.NotEmpty(todoLists);
        Assert.Equal(2, todoLists.Count());
    }

    [Fact]
    public async Task GetAllAsync_WhenHaveNotExistingTodoLists_ShouldReturnNull()
    {
        // Arrange
        var id = Guid.NewGuid();

        // Act
        var todoList = await _repository.GetByIdAsync(id);

        // Assert
        Assert.Null(todoList);
    }

    [Fact]
    public async Task AddAsync_ShouldCreateTodoList()
    {
        // Arrange
        var todoList = new TodoList("Work");

        // Act 
        await _repository.AddAsync(todoList);

        // Assert
        var retrieved = await _repository.GetByIdAsync(todoList.Id);

        Assert.NotNull(retrieved);
        Assert.Equal(todoList.Id, retrieved.Id);
        Assert.Equal(todoList.Name, retrieved.Name);
    }

    [Fact]
    public async Task UpdateAsync_ShouldUpdateTodoList()
    {
        // Arrange
        var todoList = new TodoList("Work");
        await _repository.AddAsync(todoList);

        // Act
        todoList.Name = "Study";
        await _repository.UpdateAsync(todoList);

        // Assert
        var retrieved = await _repository.GetByIdAsync(todoList.Id);

        Assert.NotNull(retrieved);
        Assert.Equal(todoList.Id, retrieved.Id);
        Assert.Equal(todoList.Name, retrieved.Name);
    }

    [Fact]
    public async Task DeleteAsync_ShouldDeleteTodoList()
    {
        // Arrange
        var todoList = new TodoList("Work");
        await _repository.AddAsync(todoList);

        // Act
        await _repository.DeleteAsync(todoList);

        // Assert
        var retrieved = await _repository.GetByIdAsync(todoList.Id);
        Assert.Null(retrieved);
    }
}
