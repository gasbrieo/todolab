using TodoLab.UseCases.TodoListAggregate.Update;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Update;

public class UpdateTodoListValidatorTests
{
    private readonly UpdateTodoListValidator _validator = new();

    [Fact]
    public void Validate_ShouldNotHaveError()
    {
        // Arrange
        var command = new UpdateTodoListCommand(Guid.NewGuid(), "Work");

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldNotHaveAnyValidationErrors();
    }

    [Fact]
    public void Validate_WhenIdIsEmpty_ShouldHaveError()
    {
        // Arrange
        var command = new UpdateTodoListCommand(Guid.Empty, string.Empty);

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldHaveValidationErrorFor(x => x.Id)
            .WithErrorCode("NotEmptyValidator");
    }

    [Fact]
    public void Validate_WhenNameIsEmpty_ShouldHaveError()
    {
        // Arrange
        var command = new UpdateTodoListCommand(Guid.NewGuid(), string.Empty);

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldHaveValidationErrorFor(x => x.Name)
            .WithErrorCode("NotEmptyValidator");
    }
}
