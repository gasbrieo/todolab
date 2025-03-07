using TodoLab.Core.Results;

namespace TodoLab.UnitTests.Core.Results;

public class ResultTests
{
    [Fact]
    public void Constructor_WithStatus_ShouldSetPropertiesProperly()
    {
        // Arrange
        var status = ResultStatus.Ok;

        // Act
        var result = new Result<string>(status);

        // Assert
        Assert.Equal(status, result.Status);
        Assert.Empty(result.Errors);
    }

    [Fact]
    public void Constructor_WithStatusAndValue_ShouldSetPropertiesProperly()
    {
        // Arrange
        var status = ResultStatus.Ok;
        var value = "Value";

        // Act
        var result = new Result<string>(status, value);

        // Assert
        Assert.Equal(status, result.Status);
        Assert.Equal(value, result.Value);
        Assert.Empty(result.Errors);
    }

    [Fact]
    public void ImplicitConversionFromResult_ShouldPreserveStatus()
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
    public void ImplicitConversionFromResult_ShouldPreserveErrors()
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
    public void ImplicitConversionFromValue_ShouldPreserveValue()
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
