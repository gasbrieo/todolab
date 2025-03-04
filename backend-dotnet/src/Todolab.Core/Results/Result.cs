namespace Todolab.Core.Results;

public class Result<T>
{
    public T? Value { get; }
    public ResultStatus Status { get; }
    public IEnumerable<string> Errors { get; protected set; } = [];

    public Result(ResultStatus status, T value)
    {
        Value = value;
        Status = status;
    }

    public Result(ResultStatus status)
    {
        Status = status;
    }

    public static implicit operator Result<T>(Result result)
    {
        return new(result.Status)
        {
            Errors = result.Errors
        };
    }

    public static implicit operator Result<T>(T value)
    {
        return new(ResultStatus.Ok, value);
    }
}
