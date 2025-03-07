using MediatR;
using Microsoft.Extensions.Logging;
using TodoLab.Core.Mediators;

namespace TodoLab.UnitTests.Core.Mediators;

public class LoggingBehaviorTests
{
    private readonly Mock<ILogger<Mediator>> _loggerMock = new();
    private readonly Mock<RequestHandlerDelegate<int>> _delegateMock = new();
    private readonly LoggingBehavior<SampleRequest, int> _behavior;

    public LoggingBehaviorTests()
    {
        _behavior = new LoggingBehavior<SampleRequest, int>(_loggerMock.Object);
    }

    [Fact]
    public async Task Handle_ShouldLogInfo()
    {
        // Arrange
        var request = new SampleRequest();
        _delegateMock.Setup(n => n()).ReturnsAsync(1);

        // Act
        var response = await _behavior.Handle(request, _delegateMock.Object, CancellationToken.None);

        // Assert
        Assert.Equal(1, response);
        _delegateMock.Verify(handler => handler(), Times.Once);
        _loggerMock.VerifyLog(LogLevel.Information, $"Handling {nameof(SampleRequest)}", Times.Once);
        _loggerMock.VerifyLog(LogLevel.Information, $"Handled {nameof(SampleRequest)}", Times.Once);
    }

    [Fact]
    public async Task Handle_WhenThrowsException_ShouldLogError()
    {
        // Arrange
        var request = new SampleRequest();
        _delegateMock.Setup(n => n()).ThrowsAsync(new Exception("Exception"));

        // Act & Assert
        await Assert.ThrowsAsync<Exception>(() => _behavior.Handle(request, _delegateMock.Object, CancellationToken.None));
        _delegateMock.Verify(handler => handler(), Times.Once);
        _loggerMock.VerifyLog(LogLevel.Information, $"Handling {nameof(SampleRequest)}", Times.Once);
        _loggerMock.VerifyLog(LogLevel.Error, $"Error while handling {nameof(SampleRequest)}", Times.Once);
    }

    public record SampleRequest : IRequest<int>;
}