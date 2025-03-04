using Todolab.Core.Mediators;

namespace Todolab.UnitTests.Core.Mediators;

public class DomainEventBaseTests
{
    [Fact]
    public void Ctor_ShouldSetPropertiesProperly()
    {
        // Arrange & Act
        var domainEvent = new SampleDomainEvent();

        // Assert
        Assert.NotEqual(DateTime.MinValue, domainEvent.DateOccurred);
    }

    public class SampleDomainEvent : DomainEventBase;
}
