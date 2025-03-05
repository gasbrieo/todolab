using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using TodoLab.UseCases.Spaces.Create;

namespace TodoLab.Presentation.Controllers;

public class SpacesController(ProblemDetailsFactory problemDetailsFactory, IMediator mediator) : BaseController(problemDetailsFactory)
{
    [HttpPost]
    public async Task<IActionResult> CreateSpace([FromBody] CreateSpaceCommand request)
    {
        var result = await mediator.Send(request);
        return ToActionResult(result);
    }
}
