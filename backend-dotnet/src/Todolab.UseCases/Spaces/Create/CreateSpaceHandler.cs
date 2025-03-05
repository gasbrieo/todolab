using TodoLab.Core.Mediators;
using TodoLab.Core.Results;
using TodoLab.Core.Spaces;

namespace TodoLab.UseCases.Spaces.Create;

public class CreateSpaceHandler(ISpaceRepository repository) : ICommandHandler<CreateSpaceCommand, Result<SpaceDto>>
{
    public async Task<Result<SpaceDto>> Handle(CreateSpaceCommand request, CancellationToken cancellationToken)
    {
        var space = new Space(request.Name);

        space = await repository.AddAsync(space, cancellationToken);

        return new SpaceDto(space.Id, space.Name);
    }
}
