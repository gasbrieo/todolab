using TodoLab.Core.Mediators;

namespace TodoLab.UnitTests.Core.Mediators;

public class DomainEventBaseTests
{
    [Fact]
    public void Constructor_ShouldSetPropertiesProperly()
    {
        // Arrange & Act
        var domainEvent = new SampleDomainEvent();

        // Assert
        Assert.NotEqual(DateTime.MinValue, domainEvent.DateOccurred);
    }

    public class SampleDomainEvent : DomainEventBase;
}
