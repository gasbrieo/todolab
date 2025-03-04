using Todolab.Core.Mediators;
using Todolab.Core.Results;

namespace Todolab.UseCases.Spaces.Create;

public record CreateSpaceCommand(string Name) : ICommand<Result<SpaceDto>>;
