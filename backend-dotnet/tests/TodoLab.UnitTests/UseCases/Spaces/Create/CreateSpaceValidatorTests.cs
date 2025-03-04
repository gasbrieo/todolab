using TodoLab.UseCases.Spaces.Create;

namespace TodoLab.UnitTests.UseCases.Spaces.Create;

public class CreateSpaceValidatorTests
{
    private readonly CreateSpaceValidator _validator = new();

    [Fact]
    public void Validate_WhenValid_ShouldPass()
    {
        // Arrange
        var command = new CreateSpaceCommand("Name");

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldNotHaveAnyValidationErrors();
    }

    [Fact]
    public void Validate_WhenEmptyName_ShouldFail()
    {
        // Arrange
        var command = new CreateSpaceCommand("");

        // Act
        var result = _validator.TestValidate(command);

        // Assert
        result.ShouldHaveValidationErrorFor(x => x.Name)
            .WithErrorCode("NotEmptyValidator");
    }
}
