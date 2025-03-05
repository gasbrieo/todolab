using MediatR;
using Microsoft.Extensions.Logging;
using TodoLab.Core.Mediators;

namespace TodoLab.UnitTests.Core.Mediators;

public class LoggingBehaviorTests
{
    private readonly Mock<ILogger<Mediator>> _logger = new();
    private readonly Mock<RequestHandlerDelegate<int>> _delegate = new();
    private readonly LoggingBehavior<SampleRequest, int> _behavior;

    public LoggingBehaviorTests()
    {
        _behavior = new LoggingBehavior<SampleRequest, int>(_logger.Object);
    }

    [Fact]
    public async Task Handle_ShouldLogInfo()
    {
        // Arrange
        var request = new SampleRequest();
        _delegate.Setup(n => n()).ReturnsAsync(1);

        // Act
        var response = await _behavior.Handle(request, _delegate.Object, CancellationToken.None);

        // Assert
        Assert.Equal(1, response);
        _delegate.Verify(handler => handler(), Times.Once);
        _logger.VerifyLog(LogLevel.Information, $"Handling {nameof(SampleRequest)}", Times.Once);
        _logger.VerifyLog(LogLevel.Information, $"Handled {nameof(SampleRequest)}", Times.Once);
    }

    [Fact]
    public async Task Handle_WhenThrowsException_ShouldLogError()
    {
        // Arrange
        var request = new SampleRequest();
        _delegate.Setup(n => n()).ThrowsAsync(new Exception("Test Exception"));

        // Act & Assert
        await Assert.ThrowsAsync<Exception>(() => _behavior.Handle(request, _delegate.Object, CancellationToken.None));
        _delegate.Verify(handler => handler(), Times.Once);
        _logger.VerifyLog(LogLevel.Information, $"Handling {nameof(SampleRequest)}", Times.Once);
        _logger.VerifyLog(LogLevel.Error, $"Error while handling {nameof(SampleRequest)}", Times.Once);
    }

    public record SampleRequest : IRequest<int>;
}