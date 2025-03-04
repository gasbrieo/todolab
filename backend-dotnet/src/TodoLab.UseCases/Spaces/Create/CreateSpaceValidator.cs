using FluentValidation;

namespace TodoLab.UseCases.Spaces.Create;

public class CreateSpaceValidator : AbstractValidator<CreateSpaceCommand>
{
    public CreateSpaceValidator()
    {
        RuleFor(e => e.Name)
            .NotEmpty();
    }
}