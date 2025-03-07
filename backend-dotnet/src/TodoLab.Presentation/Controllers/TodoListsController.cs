using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using TodoLab.Core.Pagination;
using TodoLab.Presentation.Requests;
using TodoLab.UseCases.TodoListAggregate;
using TodoLab.UseCases.TodoListAggregate.Create;
using TodoLab.UseCases.TodoListAggregate.Delete;
using TodoLab.UseCases.TodoListAggregate.Get;
using TodoLab.UseCases.TodoListAggregate.List;
using TodoLab.UseCases.TodoListAggregate.Update;

namespace TodoLab.Presentation.Controllers;

/// <summary>
/// Controller responsible for managing TodoLists.
/// </summary>
public class TodoListsController(ProblemDetailsFactory problemDetailsFactory, IMediator mediator) : BaseController(problemDetailsFactory)
{
    /// <summary>
    /// Retrieves a paginated list of all TodoLists.
    /// </summary>
    /// <param name="request">Pagination parameters.</param>
    /// <returns>A list of TodoLists.</returns>
    /// <response code="200">Successfully retrieved TodoLists.</response>
    /// <response code="400">If pagination parameters are invalid.</response>
    [HttpGet]
    [ProducesResponseType(typeof(PagedList<TodoListDto>), 200)]
    [ProducesResponseType(typeof(ProblemDetails), 400)]
    public async Task<IActionResult> ListTodoLists([FromQuery] ListTodoListsRequest request)
    {
        var query = new ListTodoListQuery(request.PageNumber, request.PageSize);
        var result = await mediator.Send(query);
        return ToActionResult(result);
    }

    /// <summary>
    /// Retrieves a specific TodoList by its ID.
    /// </summary>
    /// <param name="id">ID of the TodoList.</param>
    /// <returns>Details of the TodoList.</returns>
    /// <response code="200">Successfully retrieved the TodoList.</response>
    /// <response code="400">If the provided data is invalid.</response>
    /// <response code="404">TodoList not found.</response>
    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(TodoListDto), 200)]
    [ProducesResponseType(typeof(ProblemDetails), 400)]
    [ProducesResponseType(typeof(ProblemDetails), 404)]
    public async Task<IActionResult> GetTodoList(Guid id)
    {
        var query = new GetTodoListQuery(id);
        var result = await mediator.Send(query);
        return ToActionResult(result);
    }

    /// <summary>
    /// Creates a new TodoList.
    /// </summary>
    /// <param name="request">Data to create a new TodoList.</param>
    /// <returns>Result of the creation.</returns>
    /// <response code="201">Successfully created the TodoList.</response>
    /// <response code="400">If the provided data is invalid.</response>
    [HttpPost]
    [ProducesResponseType(typeof(TodoListDto), 201)]
    [ProducesResponseType(typeof(ProblemDetails), 400)]
    public async Task<IActionResult> CreateTodoList([FromBody] CreateTodoListRequest request)
    {
        var command = new CreateTodoListCommand(request.Name);
        var result = await mediator.Send(command);
        return ToActionResult(result);
    }

    /// <summary>
    /// Updates an existing TodoList.
    /// </summary>
    /// <param name="id">ID of the TodoList to update.</param>
    /// <param name="request">Data to update the TodoList.</param>
    /// <returns>Result of the update.</returns>
    /// <response code="200">Successfully updated the TodoList.</response>
    /// <response code="400">If the provided data is invalid.</response>
    /// <response code="404">TodoList not found.</response>
    [HttpPut("{id:guid}")]
    [ProducesResponseType(typeof(TodoListDto), 200)]
    [ProducesResponseType(typeof(ProblemDetails), 400)]
    [ProducesResponseType(typeof(ProblemDetails), 404)]
    public async Task<IActionResult> UpdateTodoList(Guid id, [FromBody] UpdateTodoListRequest request)
    {
        var command = new UpdateTodoListCommand(id, request.Name);
        var result = await mediator.Send(command);
        return ToActionResult(result);
    }

    /// <summary>
    /// Deletes a TodoList.
    /// </summary>
    /// <param name="id">ID of the TodoList to delete.</param>
    /// <returns>Result of the deletion.</returns>
    /// <response code="200">Successfully deleted the TodoList.</response>
    /// <response code="400">If the provided data is invalid.</response>
    /// <response code="404">TodoList not found.</response>
    [HttpDelete("{id:guid}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(typeof(ProblemDetails), 400)]
    [ProducesResponseType(typeof(ProblemDetails), 404)]
    public async Task<IActionResult> DeleteTodoList(Guid id)
    {
        var command = new DeleteTodoListCommand(id);
        var result = await mediator.Send(command);
        return ToActionResult(result);
    }
}
