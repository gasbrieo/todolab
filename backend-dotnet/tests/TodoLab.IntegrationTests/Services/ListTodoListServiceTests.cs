using TodoLab.Core.TodoListAggregate;
using TodoLab.Infrastructure.Persistence.Services;
using TodoLab.UseCases.TodoListAggregate.List;

namespace TodoLab.IntegrationTests.Services;

public class ListTodoListServiceTests(AppDbContextFixture fixture) : IClassFixture<AppDbContextFixture>
{
    private readonly AppDbContextFixture _fixture = fixture;
    private readonly ListTodoListService _service = new(fixture.DbContext);

    [Fact]
    public async Task ListAsync_ShouldReturnPagedList()
    {
        // Given
        await _fixture.DbContext.TodoLists.AddAsync(new TodoList("Work"));
        await _fixture.DbContext.TodoLists.AddAsync(new TodoList("Study"));
        await _fixture.DbContext.TodoLists.AddAsync(new TodoList("Movies"));
        await _fixture.DbContext.TodoLists.AddAsync(new TodoList("Books"));
        await _fixture.DbContext.TodoLists.AddAsync(new TodoList("Shopping Items"));
        await _fixture.DbContext.TodoLists.AddAsync(new TodoList("Projects"));
        await _fixture.DbContext.TodoLists.AddAsync(new TodoList("Personal Goals"));
        await _fixture.DbContext.TodoLists.AddAsync(new TodoList("Travel Plans"));
        await _fixture.DbContext.SaveChangesAsync();

        // When
        var result = await _service.ListAsync(new ListTodoListQuery(1, 5));

        // Then
        Assert.NotNull(result);
        Assert.Equal(8, result.TotalCount);
        Assert.Equal(5, result.Items.Count());
    }
}
