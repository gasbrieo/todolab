using TodoLab.UseCases.TodoListAggregate.Create;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Create;

public class CreateTodoListValidatorTests
{
    private readonly CreateTodoListValidator _validator = new();

    [Fact]
    public void Validate_ShouldNotHaveError()
    {
        // Arrange
        var command = new CreateTodoListCommand("Work");

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldNotHaveAnyValidationErrors();
    }

    [Fact]
    public void Validate_WhenNameIsEmpty_ShouldHaveError()
    {
        // Arrange
        var command = new CreateTodoListCommand(string.Empty);

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldHaveValidationErrorFor(x => x.Name)
            .WithErrorCode("NotEmptyValidator");
    }
}
