using Microsoft.EntityFrameworkCore;
using TodoLab.Core.Spaces;

namespace TodoLab.Infrastructure.Persistence.Repositories;

public class SpaceRepository(AppDbContext context) : ISpaceRepository
{
    public async Task<IEnumerable<Space>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await context.Spaces.ToListAsync(cancellationToken);
    }

    public Task<Space?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return context.Spaces.FirstOrDefaultAsync(space => space.Id == id, cancellationToken);
    }

    public async Task<Space> AddAsync(Space space, CancellationToken cancellationToken = default)
    {
        await context.Spaces.AddAsync(space, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return space;
    }

    public async Task<Space> UpdateAsync(Space space, CancellationToken cancellationToken = default)
    {
        context.Spaces.Update(space);
        await context.SaveChangesAsync(cancellationToken);
        return space;
    }

    public Task DeleteAsync(Space space, CancellationToken cancellationToken = default)
    {
        context.Spaces.Remove(space);
        return context.SaveChangesAsync(cancellationToken);
    }
}
