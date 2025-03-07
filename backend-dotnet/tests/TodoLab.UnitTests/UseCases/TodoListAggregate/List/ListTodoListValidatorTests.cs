using TodoLab.UseCases.TodoListAggregate.List;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.List;

public class ListTodoListValidatorTests
{
    private readonly ListTodoListValidator _validator = new();

    [Fact]
    public void Validate_ShouldNotHaveError()
    {
        // Arrange
        var query = new ListTodoListQuery(1, 1);

        // Act
        var result = _validator.TestValidate(query);

        // Assert
        result.ShouldNotHaveAnyValidationErrors();
    }

    [Fact]
    public void Validate_WhenPageNumberIsLessThanOne_ShouldHaveError()
    {
        // Arrange
        var query = new ListTodoListQuery(0, 1);

        // Act
        var result = _validator.TestValidate(query);

        // Assert
        result.ShouldHaveValidationErrorFor(x => x.PageNumber)
            .WithErrorCode("GreaterThanValidator");
    }

    [Fact]
    public void Validate_WhenPageSizeIsLessThanOne_ShouldHaveError()
    {
        // Arrange
        var query = new ListTodoListQuery(1, 0);

        // Act
        var result = _validator.TestValidate(query);

        // Assert
        result.ShouldHaveValidationErrorFor(x => x.PageSize)
            .WithErrorCode("GreaterThanValidator");
    }
}
