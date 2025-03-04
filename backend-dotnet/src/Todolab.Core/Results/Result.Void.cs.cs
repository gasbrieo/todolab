namespace Todolab.Core.Results;

public class Result(ResultStatus status) : Result<Result>(status)
{
    public static Result<T> Ok<T>(T value)
    {
        return new(ResultStatus.Ok, value);
    }

    public static Result NoContent()
    {
        return new(ResultStatus.NoContent);
    }

    public static Result BadRequest(params string[] errors)
    {
        return new(ResultStatus.BadRequest)
        {
            Errors = errors
        };
    }

    public static Result NotFound()
    {
        return new(ResultStatus.NotFound);
    }
}
