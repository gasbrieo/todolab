namespace TodoLab.Presentation.Requests;

/// <summary>
/// Represents a request to update a to-do list.
/// </summary>
/// <remarks>
/// This request is used when a user wants to update an existing to-do list by providing a new name.
/// </remarks>
public record UpdateTodoListRequest
{
    /// <summary>
    /// The name of the to-do list to be updated.
    /// </summary>
    /// <example>Shopping List</example>
    public string Name { get; init; } = string.Empty;

    public UpdateTodoListRequest()
    {
    }

    public UpdateTodoListRequest(string name)
    {
        Name = name;
    }
}