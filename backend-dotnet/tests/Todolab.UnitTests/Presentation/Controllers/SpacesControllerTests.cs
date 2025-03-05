using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using TodoLab.Core.Results;
using TodoLab.Presentation.Controllers;
using TodoLab.UseCases.Spaces;
using TodoLab.UseCases.Spaces.Create;

namespace TodoLab.UnitTests.Presentation.Controllers;

public class SpacesControllerTests
{
    private readonly Mock<IMediator> _mediator = new();
    private readonly Mock<ProblemDetailsFactory> _factory = new();
    private readonly SpacesController _controller;

    public SpacesControllerTests()
    {
        _controller = new(_factory.Object, _mediator.Object);
    }

    [Fact]
    public async Task CreateSpace_ShouldReturnOk()
    {
        // Arrange
        var request = new CreateSpaceCommand("Name");
        var dto = new SpaceDto(Guid.NewGuid(), request.Name);

        _mediator.Setup(m => m.Send(It.IsAny<CreateSpaceCommand>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(Result.Ok(dto));

        // Act
        var result = await _controller.CreateSpace(request);

        // Assert
        var objectResult = Assert.IsType<OkObjectResult>(result);
        var response = Assert.IsType<SpaceDto>(objectResult.Value);
        Assert.Equal(dto, response);

        _mediator.Verify(m => m.Send(It.IsAny<CreateSpaceCommand>(), It.IsAny<CancellationToken>()), Times.Once);
    }
}
