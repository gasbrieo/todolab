using TodoLab.UseCases.TodoListAggregate.Create;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Create;

public class CreateTodoListCommandTests
{
    [Fact]
    public void Constructor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var name = "Work";

        // Act
        var command = new CreateTodoListCommand(name);

        // Assert
        Assert.Equal(name, command.Name);
    }
}
