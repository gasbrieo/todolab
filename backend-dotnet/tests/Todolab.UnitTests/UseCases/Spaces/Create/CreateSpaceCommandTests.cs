using Todolab.UseCases.Spaces.Create;

namespace Todolab.UnitTests.UseCases.Spaces.Create;

public class CreateSpaceCommandTests
{
    [Fact]
    public void Ctor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var name = "Name";

        // Act
        var command = new CreateSpaceCommand(name);

        // Assert
        Assert.Equal(name, command.Name);
    }
}
