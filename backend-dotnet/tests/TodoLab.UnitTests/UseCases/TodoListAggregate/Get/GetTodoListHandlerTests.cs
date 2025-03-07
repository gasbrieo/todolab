using TodoLab.Core.Results;
using TodoLab.Core.TodoListAggregate;
using TodoLab.UseCases.TodoListAggregate.Get;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Get;

public class GetTodoListHandlerTests
{
    private readonly Mock<ITodoListRepository> _repositoryMock;
    private readonly GetTodoListHandler _handler;

    public GetTodoListHandlerTests()
    {
        _repositoryMock = new Mock<ITodoListRepository>();
        _handler = new GetTodoListHandler(_repositoryMock.Object);
    }

    [Fact]
    public async Task Handle_ShouldReturnTodoList()
    {
        // Arrange
        var query = new GetTodoListQuery(Guid.NewGuid());
        var cancellationToken = CancellationToken.None;

        var todoList = new TodoList("Work");
        _repositoryMock.Setup(repo => repo.GetByIdAsync(query.Id, cancellationToken)).ReturnsAsync(todoList);

        // Act
        var result = await _handler.Handle(query, cancellationToken);

        // Assert
        Assert.Equal(ResultStatus.Ok, result.Status);
        Assert.NotNull(result.Value);
        Assert.Equal(todoList.Id, result.Value.Id);
        Assert.Equal(todoList.Name, result.Value.Name);

        _repositoryMock.Verify(e => e.GetByIdAsync(query.Id, cancellationToken), Times.Once);
    }

    [Fact]
    public async Task Handle_WhenTodoListDoesNotExist_ShouldReturnNotFound()
    {
        // Arrange
        var query = new GetTodoListQuery(Guid.NewGuid());
        var cancellationToken = CancellationToken.None;

        _repositoryMock.Setup(repo => repo.GetByIdAsync(query.Id, cancellationToken)).ReturnsAsync((TodoList?)null);

        // Act
        var result = await _handler.Handle(query, cancellationToken);

        // Assert
        Assert.Equal(ResultStatus.NotFound, result.Status);
        Assert.Null(result.Value);

        _repositoryMock.Verify(e => e.GetByIdAsync(query.Id, cancellationToken), Times.Once);
    }
}
