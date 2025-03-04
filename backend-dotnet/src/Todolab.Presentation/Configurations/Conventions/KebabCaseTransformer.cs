﻿using System.Text.RegularExpressions;

namespace Todolab.Presentation.Configurations.Conventions;

public partial class KebabCaseTransformer : IOutboundParameterTransformer
{
    private static readonly Regex KebabRegex = KebabCaseRegex();

    [GeneratedRegex("([a-z])([A-Z])")]
    private static partial Regex KebabCaseRegex();

    public string? TransformOutbound(object? value)
    {
        var text = value?.ToString();

        if (string.IsNullOrEmpty(text)) return null;

        return KebabRegex.Replace(text, "$1-$2").ToLower();
    }
}