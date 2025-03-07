using TodoLab.Presentation.Requests;
using TodoLab.UseCases.TodoListAggregate;

namespace TodoLab.FunctionalTests.Features.TodoLists;

public class DeleteTodoListTests(CustomWebApplicationFactory factory) : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task DeleteTodoList_ShouldReturnTodoList()
    {
        // Arrange
        var createRequest = new CreateTodoListRequest("Work");
        var createResponse = await _client.PostAsJsonAsync("/api/v1/todo-lists", createRequest);
        var createResult = await createResponse.Content.ReadFromJsonAsync<TodoListDto>();
        Assert.Equal(HttpStatusCode.OK, createResponse.StatusCode);
        Assert.NotNull(createResult);
        Assert.NotEqual(Guid.Empty, createResult.Id);
        Assert.Equal(createRequest.Name, createResult.Name);

        // Act 
        var deleteResponse = await _client.DeleteAsync($"/api/v1/todo-lists/{createResult.Id}");

        // Assert
        Assert.Equal(HttpStatusCode.NoContent, deleteResponse.StatusCode);

        var getResponse = await _client.GetAsync($"/api/v1/todo-lists/{createResult.Id}");
        Assert.Equal(HttpStatusCode.NotFound, getResponse.StatusCode);
    }

    [Fact]
    public async Task DeleteTodoList_WhenIdIsEmpty_ShouldReturnBadRequest()
    {
        // Arrange
        var id = Guid.Empty;

        // Act
        var deleteResponse = await _client.DeleteAsync($"/api/v1/todo-lists/{id}");
        var deleteResult = await deleteResponse.Content.ReadFromJsonAsync<ProblemDetails>();

        // Assert
        Assert.Equal(HttpStatusCode.BadRequest, deleteResponse.StatusCode);
        Assert.NotNull(deleteResult);

        deleteResult.ShouldHaveValidationError()
            .WithMessage("'Id' must not be empty.");
    }

    [Fact]
    public async Task DeleteTodoList_WhenTodoListDoesNotExist_ShouldReturnNotFound()    
    {
        // Arrange
        var id = Guid.NewGuid();

        // Act
        var deleteResponse = await _client.DeleteAsync($"/api/v1/todo-lists/{id}");

        // Assert
        Assert.Equal(HttpStatusCode.NotFound, deleteResponse.StatusCode);
    }
}

