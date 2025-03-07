namespace TodoLab.Presentation.Requests;

/// <summary>
/// Represents a request to list the to-do lists with pagination support.
/// </summary>
/// <remarks>
/// This request is used when a user wants to retrieve a list of to-do lists with pagination support.
/// You can specify the page number and the page size to control how many items are returned.
/// </remarks>
public record ListTodoListsRequest
{
    /// <summary>
    /// The page number to retrieve.
    /// </summary>
    /// <example>1</example>
    public int PageNumber { get; init; } = 1;

    /// <summary>
    /// The number of items per page.
    /// </summary>
    /// <example>10</example>
    public int PageSize { get; init; } = 10;

    public ListTodoListsRequest()
    {
    }

    public ListTodoListsRequest(int pageNumber, int pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
}
