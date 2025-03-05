using Microsoft.AspNetCore.Mvc.Testing;
using Todolab.Presentation;

namespace Todolab.FunctionalTests.TestHelpers;

public class CustomWebApplicationFactory : WebApplicationFactory<IPresentationMarker>;