using TodoLab.Presentation.Requests;
using TodoLab.UseCases.TodoListAggregate;

namespace TodoLab.FunctionalTests.Features.TodoLists;

public class GetTodoListTests(CustomWebApplicationFactory factory) : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task GetTodoList_ShouldReturnTodoList()
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
        var getResponse = await _client.GetAsync($"/api/v1/todo-lists/{createResult.Id}");
        var getResult = await getResponse.Content.ReadFromJsonAsync<TodoListDto>();

        // Assert
        Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);
        Assert.NotNull(getResult);
        Assert.Equal(createResult.Id, getResult.Id);
        Assert.Equal(createResult.Name, getResult.Name);
    }

    [Fact]
    public async Task GetTodoList_WhenIdIsEmpty_ShouldReturnBadRequest()
    {
        // Arrange
        var id = Guid.Empty;

        // Act
        var getResponse = await _client.GetAsync($"/api/v1/todo-lists/{id}");
        var getResult = await getResponse.Content.ReadFromJsonAsync<ProblemDetails>();

        // Assert
        Assert.Equal(HttpStatusCode.BadRequest, getResponse.StatusCode);
        Assert.NotNull(getResult);

        getResult.ShouldHaveValidationError()
            .WithMessage("'Id' must not be empty.");
    }

    [Fact]
    public async Task GetTodoList_WhenTodoListDoesNotExist_ShouldReturnNotFound()
    {
        // Arrange
        var id = Guid.NewGuid();

        // Act
        var getResponse = await _client.GetAsync($"/api/v1/todo-lists/{id}");

        // Assert
        Assert.Equal(HttpStatusCode.NotFound, getResponse.StatusCode);
    }
}

