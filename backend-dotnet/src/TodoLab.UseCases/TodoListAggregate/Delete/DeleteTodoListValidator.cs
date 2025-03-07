using FluentValidation;

namespace TodoLab.UseCases.TodoListAggregate.Delete;

public class DeleteTodoListValidator : AbstractValidator<DeleteTodoListCommand>
{
    public DeleteTodoListValidator()
    {
        RuleFor(e => e.Id)
            .NotEmpty();
    }
}
