using TodoLab.UseCases.TodoListAggregate.Delete;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Delete;

public class DeleteTodoListValidatorTests
{
    private readonly DeleteTodoListValidator _validator = new();

    [Fact]
    public void Validate_ShouldNotHaveError()
    {
        // Arrange
        var command = new DeleteTodoListCommand(Guid.NewGuid());

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldNotHaveAnyValidationErrors();
    }

    [Fact]
    public void Validate_WhenIdIsEmpty_ShouldHaveError()
    {
        // Arrange
        var command = new DeleteTodoListCommand(Guid.Empty);

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldHaveValidationErrorFor(x => x.Id)
            .WithErrorCode("NotEmptyValidator");
    }
}
