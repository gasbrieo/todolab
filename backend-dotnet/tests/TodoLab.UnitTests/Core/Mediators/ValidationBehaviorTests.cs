using FluentValidation;
using MediatR;
using TodoLab.Core.Mediators;

namespace TodoLab.UnitTests.Core.Mediators;

public class ValidationBehaviorTests
{
    private readonly Mock<RequestHandlerDelegate<int>> _delegateMock = new();

    public ValidationBehaviorTests()
    {
        _delegateMock.Setup(n => n()).ReturnsAsync(1);
    }

    [Fact]
    public async Task Handle_WhenHasNoValidators_ShouldProcessRequest()
    {
        // Arrange
        var request = new SampleRequest(string.Empty);
        var validators = new List<IValidator<SampleRequest>>();
        var behavior = new ValidationBehavior<SampleRequest, int>(validators);

        // Act
        var response = await behavior.Handle(request, _delegateMock.Object, CancellationToken.None);

        // Assert
        Assert.Equal(1, response);
        _delegateMock.Verify(n => n(), Times.Once);
    }

    [Fact]
    public async Task Handle_WhenPassValidations_ShouldProcessRequest()
    {
        // Arrange
        var request = new SampleRequest("Name");
        var validators = new List<IValidator<SampleRequest>> { new SampleRequestValidator() };
        var behavior = new ValidationBehavior<SampleRequest, int>(validators);

        // Act
        var response = await behavior.Handle(request, _delegateMock.Object, CancellationToken.None);

        // Assert
        Assert.Equal(1, response);
        _delegateMock.Verify(n => n(), Times.Once);
    }

    [Fact]
    public async Task Handle_WhenFailValidations_ShouldThrowValidationException()
    {
        // Arrange
        var request = new SampleRequest(string.Empty);
        var validators = new List<IValidator<SampleRequest>> { new SampleRequestValidator() };
        var behavior = new ValidationBehavior<SampleRequest, int>(validators);

        // Act & Assert
        await Assert.ThrowsAsync<ValidationException>(() => behavior.Handle(request, _delegateMock.Object, CancellationToken.None));
        _delegateMock.Verify(n => n(), Times.Never);
    }

    public record SampleRequest(string Name) : IRequest<int>;

    public class SampleRequestValidator : AbstractValidator<SampleRequest>
    {
        public SampleRequestValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
        }
    }
}