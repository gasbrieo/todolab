﻿namespace TodoLab.Core.Pagination;

public class PagedList<T>(IEnumerable<T> items, int count, int pageNumber, int pageSize)
{
    public IEnumerable<T> Items { get; } = items;

    public int PageNumber { get; } = pageNumber;

    public int TotalPages { get; } = (int)Math.Ceiling(count / (double)pageSize);

    public int TotalCount { get; } = count;

    public bool HasPreviousPage => PageNumber > 1;

    public bool HasNextPage => PageNumber < TotalPages;
}