namespace Todolab.Core.Spaces;

public class Space(string name)
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = name;
}
