using FluentValidation;

namespace TodoLab.UseCases.TodoListAggregate.List;

public class ListTodoListValidator : AbstractValidator<ListTodoListQuery>
{
    public ListTodoListValidator()
    {
        RuleFor(e => e.PageNumber)
            .GreaterThan(0);

        RuleFor(e => e.PageSize)
            .GreaterThan(0);
    }
}

