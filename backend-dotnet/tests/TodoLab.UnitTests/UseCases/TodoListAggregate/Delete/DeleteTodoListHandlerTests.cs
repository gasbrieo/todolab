using TodoLab.Core.Results;
using TodoLab.Core.TodoListAggregate;
using TodoLab.UseCases.TodoListAggregate.Delete;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Delete;

public class DeleteTodoListHandlerTests
{
    private readonly Mock<ITodoListRepository> _repositoryMock;
    private readonly DeleteTodoListHandler _handler;

    public DeleteTodoListHandlerTests()
    {
        _repositoryMock = new Mock<ITodoListRepository>();
        _handler = new DeleteTodoListHandler(_repositoryMock.Object);
    }

    [Fact]
    public async Task Handle_ShouldReturnNoContent()
    {
        // Arrange
        var command = new DeleteTodoListCommand(Guid.NewGuid());
        var cancellationToken = CancellationToken.None;

        var todoList = new TodoList("Work");
        _repositoryMock.Setup(repo => repo.GetByIdAsync(command.Id, cancellationToken)).ReturnsAsync(todoList);

        // Act
        var result = await _handler.Handle(command, cancellationToken);

        // Assert
        Assert.Equal(ResultStatus.NoContent, result.Status);
        Assert.Null(result.Value);

        _repositoryMock.Verify(e => e.GetByIdAsync(command.Id, cancellationToken), Times.Once);
    }

    [Fact]
    public async Task Handle_WhenTodoListDoesNotExist_ShouldReturnNotFound()
    {
        // Arrange
        var command = new DeleteTodoListCommand(Guid.NewGuid());
        var cancellationToken = CancellationToken.None;

        _repositoryMock.Setup(repo => repo.GetByIdAsync(command.Id, cancellationToken)).ReturnsAsync((TodoList?)null);

        // Act
        var result = await _handler.Handle(command, cancellationToken);

        // Assert
        Assert.Equal(ResultStatus.NotFound, result.Status);
        Assert.Null(result.Value);

        _repositoryMock.Verify(e => e.GetByIdAsync(command.Id, cancellationToken), Times.Once);
    }
}
