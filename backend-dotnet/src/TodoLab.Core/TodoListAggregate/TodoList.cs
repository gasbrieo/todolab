namespace TodoLab.Core.TodoListAggregate;

public class TodoList(string name)
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = name;
}
