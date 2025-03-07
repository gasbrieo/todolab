using TodoLab.Core.Results;
using TodoLab.Core.TodoListAggregate;
using TodoLab.UseCases.TodoListAggregate.Update;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Update;

public class UpdateTodoListHandlerTests
{
    private readonly Mock<ITodoListRepository> _repositoryMock = new();
    private readonly UpdateTodoListHandler _handler;

    public UpdateTodoListHandlerTests()
    {
        _handler = new(_repositoryMock.Object);
    }

    [Fact]
    public async Task Handle_ShouldReturnTodoList()
    {
        // Arrange
        var command = new UpdateTodoListCommand(Guid.NewGuid(), "Study");
        var cancellationToken = CancellationToken.None;

        var todoList = new TodoList("Work");
        _repositoryMock.Setup(repo => repo.GetByIdAsync(command.Id, cancellationToken)).ReturnsAsync(todoList);

        _repositoryMock.Setup(e => e.UpdateAsync(todoList, cancellationToken)).ReturnsAsync((TodoList w, CancellationToken _) => w);

        // Act
        var result = await _handler.Handle(command, cancellationToken);

        // Assert
        Assert.Equal(ResultStatus.Ok, result.Status);
        Assert.NotNull(result.Value);
        Assert.Equal(todoList.Id, result.Value.Id);
        Assert.Equal(todoList.Name, result.Value.Name);

        _repositoryMock.Verify(e => e.GetByIdAsync(command.Id, cancellationToken), Times.Once);
        _repositoryMock.Verify(e => e.UpdateAsync(todoList, cancellationToken), Times.Once);
    }

    [Fact]
    public async Task Handle_WhenTodoListDoesNotExist_ShouldReturnNotFound()
    {
        // Arrange
        var command = new UpdateTodoListCommand(Guid.NewGuid(), "Work");
        var cancellationToken = CancellationToken.None;

        _repositoryMock.Setup(repo => repo.GetByIdAsync(command.Id, cancellationToken)).ReturnsAsync((TodoList?)null);

        // Act
        var result = await _handler.Handle(command, cancellationToken);

        // Assert
        Assert.Equal(ResultStatus.NotFound, result.Status);
        Assert.Null(result.Value);

        _repositoryMock.Verify(e => e.GetByIdAsync(command.Id, cancellationToken), Times.Once);
        _repositoryMock.Verify(e => e.UpdateAsync(It.IsAny<TodoList>(), It.IsAny<CancellationToken>()), Times.Never);
    }
}
