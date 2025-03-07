using TodoLab.Core.TodoListAggregate;

namespace TodoLab.UnitTests.Core.TodoListAggregate;

public class TodoListTests
{
    [Fact]
    public void Constructor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var name = "Work";

        // Act
        var todoList = new TodoList(name);

        // Assert
        Assert.Equal(name, todoList.Name);
        Assert.NotEqual(Guid.Empty, todoList.Id);
    }
}
