using TodoLab.UseCases.TodoListAggregate.Get;

namespace TodoLab.UnitTests.UseCases.TodoListAggregate.Get;

public class GetTodoListValidatorTests
{
    private readonly GetTodoListValidator _validator = new();

    [Fact]
    public void Validate_ShouldNotHaveError()
    {
        // Arrange
        var query = new GetTodoListQuery(Guid.NewGuid());

        // Act
        var result = _validator.TestValidate(query);

        // Assert
        result.ShouldNotHaveAnyValidationErrors();
    }

    [Fact]
    public void Validate_WhenIdIsEmpty_ShouldHaveError()
    {
        // Arrange
        var query = new GetTodoListQuery(Guid.Empty);

        // Act
        var result = _validator.TestValidate(query);

        // Assert
        result.ShouldHaveValidationErrorFor(x => x.Id)
            .WithErrorCode("NotEmptyValidator");
    }
}
