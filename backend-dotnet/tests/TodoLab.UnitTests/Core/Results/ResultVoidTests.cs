﻿using TodoLab.Core.Results;

namespace TodoLab.UnitTests.Core.Results;

public class ResultVoidTests
{
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
}
