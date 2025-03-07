using System.Text.Json;

namespace TodoLab.FunctionalTests.TestHelpers;

public static class ProblemDetailsAssertions
{
    private static readonly JsonSerializerOptions DefaultJsonOptions = new()
    {
        PropertyNameCaseInsensitive = true,

    };
    public static ProblemDetailsValidator ShouldHaveValidationError(this ProblemDetails problemDetails)
    {
        var errors = problemDetails.GetErrors().ToArray();
        Assert.NotEmpty(errors);
        return new ProblemDetailsValidator(errors);
    }

    public static ProblemDetailsValidator ShouldHaveAnyValidationError(this ProblemDetails problemDetails)
    {
        var errors = problemDetails.GetErrors();
        Assert.NotEmpty(errors);
        return new ProblemDetailsValidator(errors);
    }

    private static string[] GetErrors(this ProblemDetails problemDetails)
    {
        if (problemDetails.Extensions.TryGetValue("errors", out var errorsElement) && errorsElement is JsonElement jsonElement)
        {
            var teste = jsonElement.Deserialize<string[]>(DefaultJsonOptions);
            return teste ?? [];
        }

        return [];
    }

    public class ProblemDetailsValidator(string[] errors)
    {
        private readonly string[] _errors = errors;

        public ProblemDetailsValidator WithMessage(string expectedMessage)
        {
            Assert.Contains(_errors, e => e == expectedMessage);
            return this;
        }
    }
}
