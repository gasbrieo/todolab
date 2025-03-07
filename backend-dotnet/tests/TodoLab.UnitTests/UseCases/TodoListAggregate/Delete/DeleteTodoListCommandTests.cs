using TodoLab.UseCases.TodoListAggregate.Delete;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Delete;

public class DeleteTodoListCommandTests
{
    [Fact]
    public void Constructor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var id = Guid.NewGuid();

        // Act
        var command = new DeleteTodoListCommand(id);

        // Assert
        Assert.Equal(id, command.Id);
    }

}
