using TodoLab.Core.Mediators;
using TodoLab.Core.Results;

namespace TodoLab.UseCases.Spaces.Create;

public record CreateSpaceCommand(string Name) : ICommand<Result<SpaceDto>>;
