using FluentValidation;

namespace TodoLab.UseCases.TodoListAggregate.Create;

public class CreateTodoListValidator : AbstractValidator<CreateTodoListCommand>
{
    public CreateTodoListValidator()
    {
        RuleFor(e => e.Name)
            .NotEmpty();
    }
}
