using FluentValidation;

namespace TodoLab.UseCases.TodoListAggregate.Get;

public class GetTodoListValidator : AbstractValidator<GetTodoListQuery>
{
    public GetTodoListValidator()
    {
        RuleFor(e => e.Id)
            .NotEmpty();
    }
}