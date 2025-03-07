namespace TodoLab.Core.Pagination;

/// <summary>
/// Represents a paged list of items in a paginated result.
/// </summary>
public class PagedList<T>(IEnumerable<T> items, int count, int pageNumber, int pageSize)
{
    /// <summary>
    /// The items for the current page.
    /// </summary>
    public IEnumerable<T> Items { get; } = items;

    /// <summary>
    /// The current page number.
    /// </summary>
    public int PageNumber { get; } = pageNumber;

    /// <summary>
    /// The total number of pages in the result.
    /// </summary>
    public int TotalPages { get; } = (int)Math.Ceiling(count / (double)pageSize);

    /// <summary>
    /// The total number of items across all pages.
    /// </summary>
    public int TotalCount { get; } = count;

    /// <summary>
    /// Indicates whether there is a previous page.
    /// </summary>
    public bool HasPreviousPage => PageNumber > 1;

    /// <summary>
    /// Indicates whether there is a next page.
    /// </summary>
    public bool HasNextPage => PageNumber < TotalPages;
}