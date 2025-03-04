using FluentValidation;

namespace Todolab.UseCases.Spaces.Create;

public class CreateSpaceValidator : AbstractValidator<CreateSpaceCommand>
{
    public CreateSpaceValidator()
    {
        RuleFor(e => e.Name)
            .NotEmpty();
    }
}