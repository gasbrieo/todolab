using Todolab.Core.Mediators;
using Todolab.Core.Results;
using Todolab.Core.Spaces;

namespace Todolab.UseCases.Spaces.Create;

public class CreateSpaceHandler(ISpaceRepository repository) : ICommandHandler<CreateSpaceCommand, Result<SpaceDto>>
{
    public async Task<Result<SpaceDto>> Handle(CreateSpaceCommand request, CancellationToken cancellationToken)
    {
        var space = new Space(request.Name);

        space = await repository.AddAsync(space, cancellationToken);

        return new SpaceDto(space.Id, space.Name);
    }
}
