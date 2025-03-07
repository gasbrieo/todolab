using TodoLab.Presentation.Requests;
using TodoLab.UseCases.TodoListAggregate;

namespace TodoLab.FunctionalTests.Features.TodoLists;

public class CreateTodoListTests(CustomWebApplicationFactory factory) : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task CreateTodoList_ShouldReturnTodoList()
    {
        // Arrange
        var createRequest = new CreateTodoListRequest("Work");

        // Act 
        var createResponse = await _client.PostAsJsonAsync("/api/v1/todo-lists", createRequest);
        var createResult = await createResponse.Content.ReadFromJsonAsync<TodoListDto>();

        // Assert
        Assert.Equal(HttpStatusCode.OK, createResponse.StatusCode);
        Assert.NotNull(createResult);
        Assert.NotEqual(Guid.Empty, createResult.Id);
        Assert.Equal(createRequest.Name, createResult.Name);

        var getResponse = await _client.GetAsync($"/api/v1/todo-lists/{createResult.Id}");
        var getResult = await getResponse.Content.ReadFromJsonAsync<TodoListDto>();
        Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);
        Assert.NotNull(getResult);
        Assert.Equal(createResult.Id, getResult.Id);
        Assert.Equal(createResult.Name, getResult.Name);
    }

    [Fact]
    public async Task CreateTodoList_WhenNameIsEmpty_ShouldReturnBadRequest()
    {
        // Arrange
        var createRequest = new CreateTodoListRequest("");

        // Act
        var createResponse = await _client.PostAsJsonAsync("/api/v1/todo-lists", createRequest);
        var createResult = await createResponse.Content.ReadFromJsonAsync<ProblemDetails>();

        // Assert
        Assert.Equal(HttpStatusCode.BadRequest, createResponse.StatusCode);
        Assert.NotNull(createResult);

        createResult.ShouldHaveValidationError()
            .WithMessage("'Name' must not be empty.");
    }
}

