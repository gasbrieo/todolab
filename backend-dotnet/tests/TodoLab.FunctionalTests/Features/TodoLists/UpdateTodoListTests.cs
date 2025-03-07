using TodoLab.Presentation.Requests;
using TodoLab.UseCases.TodoListAggregate;

namespace TodoLab.FunctionalTests.Features.TodoLists;

public class UpdateTodoListTests(CustomWebApplicationFactory factory) : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task UpdateTodoList_ShouldReturnTodoList()
    {
        // Arrange
        var createRequest = new CreateTodoListRequest("Work");
        var createResponse = await _client.PostAsJsonAsync("/api/v1/todo-lists", createRequest);
        var createResult = await createResponse.Content.ReadFromJsonAsync<TodoListDto>();
        Assert.Equal(HttpStatusCode.OK, createResponse.StatusCode);
        Assert.NotNull(createResult);
        Assert.NotEqual(Guid.Empty, createResult.Id);
        Assert.Equal(createRequest.Name, createResult.Name);

        var updateRequest = new UpdateTodoListRequest("Study");

        // Act 
        var updateResponse = await _client.PutAsJsonAsync($"/api/v1/todo-lists/{createResult.Id}", updateRequest);
        var updateResult = await updateResponse.Content.ReadFromJsonAsync<TodoListDto>();

        // Assert
        Assert.Equal(HttpStatusCode.OK, updateResponse.StatusCode);
        Assert.NotNull(updateResult);
        Assert.Equal(createResult.Id, updateResult.Id);
        Assert.Equal(updateRequest.Name, updateResult.Name);

        var getResponse = await _client.GetAsync($"/api/v1/todo-lists/{updateResult.Id}");
        var getResult = await getResponse.Content.ReadFromJsonAsync<TodoListDto>();
        Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);
        Assert.NotNull(getResult);
        Assert.Equal(updateResult.Id, getResult.Id);
        Assert.Equal(updateResult.Name, getResult.Name);
    }

    [Fact]
    public async Task UpdateTodoList_WhenIdIsEmpty_ShouldReturnBadRequest()
    {
        // Arrange
        var id = Guid.Empty;
        var updateRequest = new UpdateTodoListRequest("Work");

        // Act
        var updateResponse = await _client.PutAsJsonAsync($"/api/v1/todo-lists/{id}", updateRequest);
        var result = await updateResponse.Content.ReadFromJsonAsync<ProblemDetails>();

        // Assert
        Assert.Equal(HttpStatusCode.BadRequest, updateResponse.StatusCode);
        Assert.NotNull(result);

        result.ShouldHaveValidationError()
            .WithMessage("'Id' must not be empty.");
    }

    [Fact]
    public async Task UpdateTodoList_WhenNameIsEmpty_ShouldReturnBadRequest()
    {
        // Arrange
        var id = Guid.NewGuid();
        var updateRequest = new UpdateTodoListRequest("");

        // Act
        var updateResponse = await _client.PutAsJsonAsync($"/api/v1/todo-lists/{id}", updateRequest);
        var updateResult = await updateResponse.Content.ReadFromJsonAsync<ProblemDetails>();

        // Assert
        Assert.Equal(HttpStatusCode.BadRequest, updateResponse.StatusCode);
        Assert.NotNull(updateResult);

        updateResult.ShouldHaveValidationError()
            .WithMessage("'Name' must not be empty.");
    }

    [Fact]
    public async Task UpdateTodoList_WhenTodoListDoesNotExist_ShouldReturnNotFound()
    {
        // Arrange
        var id = Guid.NewGuid();
        var updateRequest = new UpdateTodoListRequest("Work");

        // Act
        var updateResponse = await _client.PutAsJsonAsync($"/api/v1/todo-lists/{id}", updateRequest);

        // Assert
        Assert.Equal(HttpStatusCode.NotFound, updateResponse.StatusCode);
    }
}

