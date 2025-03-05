using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Todolab.Core.Results;
using Todolab.Presentation.Controllers;

namespace Todolab.UnitTests.Presentation.Controllers;

public class BaseControllerTests
{
    private readonly Mock<ProblemDetailsFactory> _factory = new();
    private readonly SampleController _controller;

    public BaseControllerTests()
    {
        _controller = new SampleController(_factory.Object);

        _factory
            .Setup(f => f.CreateProblemDetails(It.IsAny<HttpContext>(), It.IsAny<int>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
            .Returns((HttpContext context, int status, string title, string type, string detail, string instance) =>
                new ProblemDetails
                {
                    Status = status,
                    Title = title,
                    Type = type,
                    Detail = detail,
                    Instance = instance
                }
            );
    }

    [Fact]
    public void ToActionResult_WhenOkResult_ShouldReturnOk()
    {
        // Arrange
        var result = Result.Ok(new SampleDto());

        // Act
        var actionResult = _controller.TestToActionResult(result);

        // Assert
        var objectResult = Assert.IsType<OkObjectResult>(actionResult);
        var response = Assert.IsType<SampleDto>(objectResult.Value);
        Assert.Equal(result.Value, response);
    }

    [Fact]
    public void ToActionResult_WhenNoContentResult_ShouldReturnNoContent()
    {
        // Arrange
        var result = Result.NoContent();

        // Act
        var actionResult = _controller.TestToActionResult(result);

        // Assert
        Assert.IsType<NoContentResult>(actionResult);
    }

    [Fact]
    public void ToActionResult_WhenBadRequestResult_ShouldReturnBadRequest()
    {
        // Arrange
        var error = "Error";
        var result = Result.BadRequest(error);

        // Act
        var actionResult = _controller.TestToActionResult(result);

        // Assert
        var objectResult = Assert.IsType<BadRequestObjectResult>(actionResult);
        var response = Assert.IsType<ProblemDetails>(objectResult.Value);

        Assert.Equal(StatusCodes.Status400BadRequest, response.Status);
        Assert.Equal("Bad Request", response.Title);
        Assert.Equal("One or more validation errors occurred.", response.Detail);

        var errors = Assert.IsType<string[]>(response.Extensions["errors"]);
        Assert.Single(errors);
    }

    [Fact]
    public void ToActionResult_WhenNotFoundResult_ShouldReturnNotFound()
    {
        // Arrange
        var result = Result.NotFound();

        // Act
        var actionResult = _controller.TestToActionResult(result);

        // Assert
        Assert.IsType<NotFoundResult>(actionResult);
    }

    [Fact]
    public void ToActionResult_WhenUnkownResult_ShouldThrowNotImplementedException()
    {
        // Arrange
        var result = new Result((ResultStatus)999);

        // Act & Assert
        Assert.Throws<NotImplementedException>(() => _controller.TestToActionResult(result));
    }

    private record SampleDto;

    private class SampleController(ProblemDetailsFactory factory) : BaseController(factory)
    {
        public IActionResult TestToActionResult(Result<SampleDto> result)
        {
            return ToActionResult(result);
        }
    }
}
