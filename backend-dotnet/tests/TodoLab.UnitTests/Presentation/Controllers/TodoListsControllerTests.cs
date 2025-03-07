using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using TodoLab.Core.Pagination;
using TodoLab.Core.Results;
using TodoLab.Presentation.Controllers;
using TodoLab.Presentation.Requests;
using TodoLab.UseCases.TodoListAggregate;
using TodoLab.UseCases.TodoListAggregate.Create;
using TodoLab.UseCases.TodoListAggregate.Delete;
using TodoLab.UseCases.TodoListAggregate.Get;
using TodoLab.UseCases.TodoListAggregate.List;
using TodoLab.UseCases.TodoListAggregate.Update;

namespace TodoLab.UnitTests.Presentation.Controllers;

public class TodoListsControllerTests
{
    private readonly Mock<IMediator> _mediatorMock = new();
    private readonly Mock<ProblemDetailsFactory> _factoryMock = new();
    private readonly TodoListsController _controller;

    public TodoListsControllerTests()
    {
        _controller = new(_factoryMock.Object, _mediatorMock.Object);
    }

    [Fact]
    public async Task ListTodoLists_ShouldReturnOk()
    {
        // Arrange
        var request = new ListTodoListsRequest(1, 10);

        var todoLists = new List<TodoListDto>();
        var pagedList = new PagedList<TodoListDto>(todoLists, todoLists.Count, request.PageNumber, request.PageSize);
        _mediatorMock.Setup(m => m.Send(It.IsAny<ListTodoListQuery>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(pagedList);

        // Act
        var result = await _controller.ListTodoLists(request);

        // Assert
        var objectResult = Assert.IsType<OkObjectResult>(result);
        var response = Assert.IsType<PagedList<TodoListDto>>(objectResult.Value);
        Assert.Equal(pagedList, response);

        _mediatorMock.Verify(m => m.Send(It.IsAny<ListTodoListQuery>(), It.IsAny<CancellationToken>()), Times.Once);
    }

    [Fact]
    public async Task GetTodoList_ShouldReturnOk()
    {
        // Arrange
        var id = Guid.NewGuid();

        var todoList = new TodoListDto(Guid.NewGuid(), "Work");
        _mediatorMock.Setup(m => m.Send(It.IsAny<GetTodoListQuery>(), It.IsAny<CancellationToken>())).ReturnsAsync(todoList);

        // Act
        var result = await _controller.GetTodoList(id);

        // Assert
        var objectResult = Assert.IsType<OkObjectResult>(result);
        var response = Assert.IsType<TodoListDto>(objectResult.Value);
        Assert.Equal(todoList, response);

        _mediatorMock.Verify(m => m.Send(It.IsAny<GetTodoListQuery>(), It.IsAny<CancellationToken>()), Times.Once);
    }

    [Fact]
    public async Task CreateTodoList_ShouldReturnOk()
    {
        // Arrange
        var request = new CreateTodoListRequest("Work");

        var todoList = new TodoListDto(Guid.NewGuid(), request.Name);
        _mediatorMock.Setup(m => m.Send(It.IsAny<CreateTodoListCommand>(), It.IsAny<CancellationToken>())).ReturnsAsync(todoList);

        // Act
        var result = await _controller.CreateTodoList(request);

        // Assert
        var objectResult = Assert.IsType<OkObjectResult>(result);
        var response = Assert.IsType<TodoListDto>(objectResult.Value);
        Assert.Equal(todoList, response);

        _mediatorMock.Verify(m => m.Send(It.IsAny<CreateTodoListCommand>(), It.IsAny<CancellationToken>()), Times.Once);
    }

    [Fact]
    public async Task UpdateTodoList_ShouldReturnOk()
    {
        // Arrange
        var id = Guid.NewGuid();
        var request = new UpdateTodoListRequest("Work");

        var todoList = new TodoListDto(Guid.NewGuid(), request.Name);
        _mediatorMock.Setup(m => m.Send(It.IsAny<UpdateTodoListCommand>(), It.IsAny<CancellationToken>())).ReturnsAsync(todoList);

        // Act
        var result = await _controller.UpdateTodoList(id, request);

        // Assert
        var objectResult = Assert.IsType<OkObjectResult>(result);
        var response = Assert.IsType<TodoListDto>(objectResult.Value);
        Assert.Equal(todoList, response);

        _mediatorMock.Verify(m => m.Send(It.IsAny<UpdateTodoListCommand>(), It.IsAny<CancellationToken>()), Times.Once);
    }

    [Fact]
    public async Task DeleteTodoList_ShouldReturnOk()
    {
        // Arrange
        var id = Guid.NewGuid();

        _mediatorMock.Setup(m => m.Send(It.IsAny<DeleteTodoListCommand>(), It.IsAny<CancellationToken>())).ReturnsAsync(Result.NoContent());

        // Act
        var result = await _controller.DeleteTodoList(id);

        // Assert
        Assert.IsType<NoContentResult>(result);

        _mediatorMock.Verify(m => m.Send(It.IsAny<DeleteTodoListCommand>(), It.IsAny<CancellationToken>()), Times.Once);
    }
}
