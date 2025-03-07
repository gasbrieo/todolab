using TodoLab.Presentation.Requests;
using TodoLab.UseCases.TodoListAggregate;

namespace TodoLab.FunctionalTests.Features.TodoLists;

public class ListTodoListsTests(CustomWebApplicationFactory factory) : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task ListTodoLists_ShouldReturnPagedList()
    {
        // Arrange
        await _client.PostAsJsonAsync("/api/v1/todo-lists", new CreateTodoListRequest("Work"));
        await _client.PostAsJsonAsync("/api/v1/todo-lists", new CreateTodoListRequest("Study"));
        await _client.PostAsJsonAsync("/api/v1/todo-lists", new CreateTodoListRequest("Movies"));
        await _client.PostAsJsonAsync("/api/v1/todo-lists", new CreateTodoListRequest("Books"));
        await _client.PostAsJsonAsync("/api/v1/todo-lists", new CreateTodoListRequest("Shopping Items"));

        var listRequest = new ListTodoListsRequest(1, 5);

        // Act 
        var listResponse = await _client.GetAsync($"/api/v1/todo-lists?pageNumber={listRequest.PageNumber}&pageSize={listRequest.PageSize}");
        var listResult = await listResponse.Content.ReadFromJsonAsync<StaticPagedList<TodoListDto>>();

        // Assert
        Assert.Equal(HttpStatusCode.OK, listResponse.StatusCode);
        Assert.NotNull(listResult);
        Assert.Equal(5, listResult.Items.Count());
    }

    [Fact]
    public async Task ListTodoLists_WhenPageNumberIsLessThanOne_ShouldReturnBadRequest()
    {
        // Arrange
        var listRequest = new ListTodoListsRequest(0, 1);

        // Act
        var listResponse = await _client.GetAsync($"/api/v1/todo-lists?pageNumber={listRequest.PageNumber}&pageSize={listRequest.PageSize}");
        var listResult = await listResponse.Content.ReadFromJsonAsync<ProblemDetails>();

        // Assert
        Assert.Equal(HttpStatusCode.BadRequest, listResponse.StatusCode);
        Assert.NotNull(listResult);

        listResult.ShouldHaveValidationError()
            .WithMessage("'Page Number' must be greater than '0'.");
    }

    [Fact]
    public async Task ListTodoLists_WhenPageSizeIsLessThanOne_ShouldReturnBadRequest()
    {
        // Arrange
        var listRequest = new ListTodoListsRequest(1, 0);

        // Act
        var listResponse = await _client.GetAsync($"/api/v1/todo-lists?pageNumber={listRequest.PageNumber}&pageSize={listRequest.PageSize}");
        var listResult = await listResponse.Content.ReadFromJsonAsync<ProblemDetails>();

        // Assert
        Assert.Equal(HttpStatusCode.BadRequest, listResponse.StatusCode);
        Assert.NotNull(listResult);

        listResult.ShouldHaveValidationError()
            .WithMessage("'Page Size' must be greater than '0'.");
    }
}

