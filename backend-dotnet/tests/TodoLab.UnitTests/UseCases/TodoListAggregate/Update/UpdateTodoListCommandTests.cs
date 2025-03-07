using TodoLab.UseCases.TodoListAggregate.Update;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Update;

public class UpdateTodoListCommandTests
{
    [Fact]
    public void Constructor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var id = Guid.NewGuid();
        var name = "Work";

        // Act
        var command = new UpdateTodoListCommand(id, name);

        // Assert
        Assert.Equal(id, command.Id);
        Assert.Equal(name, command.Name);
    }
}
