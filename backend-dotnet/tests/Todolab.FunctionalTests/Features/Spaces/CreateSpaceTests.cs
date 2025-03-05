using TodoLab.UseCases.Spaces;
using TodoLab.UseCases.Spaces.Create;

namespace TodoLab.FunctionalTests.Features.Spaces;

public class CreateSpaceTests(CustomWebApplicationFactory factory) : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task CreateSpace_ShouldCreateSpaceSuccessfully()
    {
        // Arrange
        var createRequest = new CreateSpaceCommand("Name");

        // Act
        var createResponse = await _client.PostAsJsonAsync("/api/v1/spaces", createRequest);
        var createResult = await createResponse.Content.ReadFromJsonAsync<SpaceDto>();

        // Assert
        Assert.Equal(HttpStatusCode.OK, createResponse.StatusCode);
        Assert.NotNull(createResult);
        Assert.NotEqual(Guid.Empty, createResult.Id);
        Assert.Equal(createRequest.Name, createResult.Name);
    }

    [Fact]
    public async Task CreateSpace_WhenEmptyName_ShouldReturnBadRequest()
    {
        // Arrange
        var createRequest = new CreateSpaceCommand("");

        // Act
        var createResponse = await _client.PostAsJsonAsync("/api/v1/spaces", createRequest);
        var createResult = await createResponse.Content.ReadFromJsonAsync<ProblemDetails>();

        // Assert
        Assert.Equal(HttpStatusCode.BadRequest, createResponse.StatusCode);
        Assert.NotNull(createResult);

        createResult.ShouldHaveValidationError()
            .WithMessage("'Name' must not be empty.");
    }
}
