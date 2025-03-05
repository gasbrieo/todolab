using TodoLab.Core.Results;
using TodoLab.Core.Spaces;
using TodoLab.UseCases.Spaces.Create;

namespace TodoLab.UnitTests.UseCases.Spaces.Create;

public class CreateSpaceHandlerTests
{
    private readonly Mock<ISpaceRepository> _repository = new();
    private readonly CreateSpaceHandler _handler;

    public CreateSpaceHandlerTests()
    {
        _handler = new(_repository.Object);
    }

    [Fact]
    public async Task Handle_ShouldCreateSpace()
    {
        // Arrange
        var command = new CreateSpaceCommand("Name");
        var cancellationToken = CancellationToken.None;

        Space? capturedSpace = null;
        _repository
            .Setup(e => e.AddAsync(It.IsAny<Space>(), It.IsAny<CancellationToken>()))
            .Callback<Space, CancellationToken>((workItem, _) => capturedSpace = workItem)
            .ReturnsAsync((Space w, CancellationToken _) => w);

        // Act
        var result = await _handler.Handle(command, cancellationToken);

        // Assert
        Assert.Equal(ResultStatus.Ok, result.Status);
        Assert.NotNull(result.Value);
        Assert.Equal(command.Name, result.Value.Name);
        Assert.NotEqual(Guid.Empty, result.Value.Id);

        Assert.NotNull(capturedSpace);
        Assert.Equal(command.Name, capturedSpace.Name);

        _repository.Verify(repo => repo.AddAsync(It.IsAny<Space>(), cancellationToken), Times.Once);
    }
}
