using Microsoft.AspNetCore.Mvc.Testing;
using TodoLab.Presentation;

namespace TodoLab.FunctionalTests.TestHelpers;

public class CustomWebApplicationFactory : WebApplicationFactory<IPresentationMarker>;