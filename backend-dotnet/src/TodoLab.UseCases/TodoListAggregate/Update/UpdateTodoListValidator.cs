using FluentValidation;

namespace TodoLab.UseCases.TodoListAggregate.Update;

public class UpdateTodoListValidator : AbstractValidator<UpdateTodoListCommand>
{
    public UpdateTodoListValidator()
    {
        RuleFor(e => e.Id)
            .NotEmpty();

        RuleFor(e => e.Name)
            .NotEmpty();
    }
}
