using TodoLab.UseCases.TodoListAggregate.Get;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Get;

public class GetTodoListQueryTests
{
    [Fact]
    public void Constructor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var id = Guid.NewGuid();

        // Act
        var query = new GetTodoListQuery(id);

        // Assert
        Assert.Equal(id, query.Id);
    }
}
