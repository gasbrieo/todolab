using Todolab.Core.Results;

namespace Todolab.UnitTests.Core.Results;

public class ResultTests
{
    [Fact]
    public void Ctor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var status = ResultStatus.Ok;

        // Act
        var result = new Result(status);

        // Assert
        Assert.Equal(status, result.Status);
        Assert.Empty(result.Errors);
    }

    [Fact]
    public void Ok_ShouldCreateOkResult()
    {
        // Arrange
        var value = "Value";

        // Act
        var result = Result.Ok(value);

        // Assert
        Assert.Equal(ResultStatus.Ok, result.Status);
        Assert.Equal(value, result.Value);
    }

    [Fact]
    public void NoContent_ShouldCreateNoContentResult()
    {
        // Arrange & Act
        var result = Result.NoContent();

        // Assert
        Assert.Equal(ResultStatus.NoContent, result.Status);
        Assert.Empty(result.Errors);
    }

    [Fact]
    public void BadRequest_ShouldCreateBadRequestResult()
    {
        // Arrange
        var error = "Error";

        // Act
        var result = Result.BadRequest(error);

        // Assert
        Assert.Equal(ResultStatus.BadRequest, result.Status);
        Assert.Single(result.Errors);
        Assert.Equal(error, result.Errors.First());
    }

    [Fact]
    public void NotFound_ShouldCreateNotFoundResult()
    {
        // Arrange & Act
        var result = Result.NotFound();

        // Assert
        Assert.Equal(ResultStatus.NotFound, result.Status);
        Assert.Empty(result.Errors);
    }

    [Fact]
    public void Result_WhenImplicitConversionToGeneric_ShouldPreserveStatus()
    {
        // Arrange
        var status = ResultStatus.Ok;
        var result = new Result(status);

        // Act
        Result<string> genericResult = result;

        // Assert
        Assert.Equal(status, genericResult.Status);
        Assert.Null(genericResult.Value);
        Assert.Empty(genericResult.Errors);
    }

    [Fact]
    public void ResultWithErrors_WhenImplicitConversionToGeneric_ShouldPreserveErrors()
    {
        // Arrange
        var error = "Error";
        var result = Result.BadRequest(error);

        // Act
        Result<string> genericResult = result;

        // Assert
        Assert.Equal(ResultStatus.BadRequest, genericResult.Status);
        Assert.Null(genericResult.Value);
        Assert.Single(genericResult.Errors);
        Assert.Contains(error, genericResult.Errors);
    }

    [Fact]
    public void Value_WhenImplicitConversionToResult_ShouldSetValue()
    {
        // Arrange
        var value = "Value";

        // Act
        Result<string> result = value;

        // Assert
        Assert.Equal(ResultStatus.Ok, result.Status);
        Assert.Equal(value, result.Value);
    }
}
