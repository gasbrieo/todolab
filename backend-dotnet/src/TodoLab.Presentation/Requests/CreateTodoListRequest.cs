namespace TodoLab.Presentation.Requests;

/// <summary>
/// Represents a request to create a new to-do list.
/// </summary>
/// <remarks>
/// This request is used when a user wants to create a new to-do list by providing a name for it.
/// </remarks>
public record CreateTodoListRequest
{
    /// <summary>
    /// The name of the to-do list to be created.
    /// </summary>
    /// <example>Shopping List</example>
    public string Name { get; init; } = string.Empty;

    public CreateTodoListRequest()
    {
    }

    public CreateTodoListRequest(string name)
    {
        Name = name;
    }
}
