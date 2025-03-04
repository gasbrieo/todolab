using Todolab.Core.Spaces;

namespace Todolab.UnitTests.Core.Spaces;

public class SpaceTests
{
    [Fact]
    public void Ctor_ShouldSetPropertiesProperly()
    {
        // Arrange
        var name = "Name";

        // Act
        var space = new Space(name);

        // Assert
        Assert.Equal(name, space.Name);
    }
}
