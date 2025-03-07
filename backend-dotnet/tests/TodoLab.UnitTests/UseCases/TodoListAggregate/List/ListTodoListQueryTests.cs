using TodoLab.UseCases.TodoListAggregate.List;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.List;

public class ListTodoListQueryTests
{
    [Fact]
    public void Constructor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var pageNumber = 1;
        var pageSize = 10;

        // Act
        var query = new ListTodoListQuery(pageNumber, pageSize);

        // Assert
        Assert.Equal(pageNumber, query.PageNumber);
        Assert.Equal(pageSize, query.PageSize);
    }
}
