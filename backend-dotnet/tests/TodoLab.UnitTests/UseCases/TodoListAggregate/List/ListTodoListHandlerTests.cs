using TodoLab.Core.Pagination;
using TodoLab.Core.Results;
using TodoLab.UseCases.TodoListAggregate;
using TodoLab.UseCases.TodoListAggregate.List;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.List;

public class ListTodoListHandlerTests
{
    private readonly Mock<IListTodoListService> _serviceMock = new();
    private readonly ListTodoListHandler _handler;

    public ListTodoListHandlerTests()
    {
        _handler = new(_serviceMock.Object);
    }

    [Fact]
    public async Task Handle_ShouldReturnPagedList()
    {
        // Arrange
        var query = new ListTodoListQuery(1, 10);
        var cancellationToken = CancellationToken.None;

        var todoLists = new List<TodoListDto>();
        var pagedList = new PagedList<TodoListDto>(todoLists, todoLists.Count, query.PageNumber, query.PageSize);
        _serviceMock.Setup(e => e.ListAsync(query, cancellationToken)).ReturnsAsync(pagedList);

        // Act
        var result = await _handler.Handle(query, cancellationToken);

        // Assert
        Assert.Equal(ResultStatus.Ok, result.Status);
        Assert.NotNull(result.Value);
        Assert.Equal(pagedList, result.Value);

        _serviceMock.Verify(e => e.ListAsync(query, cancellationToken), Times.Once);
    }
}