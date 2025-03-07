namespace TodoLab.UseCases.TodoListAggregate;

/// <summary>
/// Represents a data transfer object (DTO) for a to-do list.
/// </summary>
/// <remarks>
/// This DTO is used to transfer information about a to-do list, including its unique identifier and name.
/// It is returned in API responses when listing or retrieving a to-do list.
/// </remarks>
public record TodoListDto
{
    /// <summary>
    /// The unique identifier of the to-do list.
    /// </summary>
    /// <example>c6e56bc4-b9c4-4f67-b911-f25b8b6ab2d5</example>
    public Guid Id { get; init; }

    /// <summary>
    /// The name of the to-do list.
    /// </summary>
    /// <example>Shopping List</example>
    public string Name { get; init; } = string.Empty;

    public TodoListDto(Guid id, string name)
    {
        Id = id;
        Name = name;
    }
}