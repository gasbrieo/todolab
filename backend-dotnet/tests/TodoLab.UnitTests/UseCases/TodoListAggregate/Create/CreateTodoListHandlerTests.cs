using TodoLab.Core.Results;
using TodoLab.Core.TodoListAggregate;
using TodoLab.UseCases.TodoListAggregate.Create;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Create;

public class CreateTodoListHandlerTests
{
    private readonly Mock<ITodoListRepository> _repositoryMock = new();
    private readonly CreateTodoListHandler _handler;

    public CreateTodoListHandlerTests()
    {
        _handler = new(_repositoryMock.Object);
    }

    [Fact]
    public async Task Handle_ShouldReturnTodoList()
    {
        // Arrange
        var command = new CreateTodoListCommand("Work");
        var cancellationToken = CancellationToken.None;

        TodoList? capturedTodoList = null;
        _repositoryMock
            .Setup(e => e.AddAsync(It.IsAny<TodoList>(), It.IsAny<CancellationToken>()))
            .Callback<TodoList, CancellationToken>((todoList, _) => capturedTodoList = todoList)
            .ReturnsAsync((TodoList w, CancellationToken _) => w);

        // Act
        var result = await _handler.Handle(command, cancellationToken);

        // Assert
        Assert.NotNull(capturedTodoList);
        Assert.NotEqual(Guid.Empty, capturedTodoList.Id);
        Assert.Equal(command.Name, capturedTodoList.Name);

        Assert.Equal(ResultStatus.Ok, result.Status);
        Assert.NotNull(result.Value);
        Assert.Equal(capturedTodoList.Name, result.Value.Name);
        Assert.Equal(capturedTodoList.Id, result.Value.Id);

        _repositoryMock.Verify(repo => repo.AddAsync(It.IsAny<TodoList>(), cancellationToken), Times.Once);
    }
}