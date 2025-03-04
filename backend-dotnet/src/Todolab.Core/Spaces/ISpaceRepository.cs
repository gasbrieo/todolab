namespace Todolab.Core.Spaces;

public interface ISpaceRepository
{
    Task<IEnumerable<Space>> GetAllAsync(CancellationToken cancellationToken = default);

    Task<Space?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);

    Task<Space> AddAsync(Space space, CancellationToken cancellationToken = default);

    Task<Space> UpdateAsync(Space space, CancellationToken cancellationToken = default);

    Task DeleteAsync(Space space, CancellationToken cancellationToken = default);
}