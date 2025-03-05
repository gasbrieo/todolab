using Todolab.Core.Spaces;
using Todolab.Infrastructure.Persistence.Repositories;

namespace Todolab.IntegrationTests.Repositories;

public class SpaceRepositoryTests : IClassFixture<AppDbContextFixture>
{
    private readonly SpaceRepository _repository;

    public SpaceRepositoryTests(AppDbContextFixture fixture)
    {
        _repository = new(fixture.DbContext);
        fixture.ResetDatabase();
    }

    [Fact]
    public async Task GetAllAsync_ActHaveExistingSpaces_ShouldReturnsExpectedAmount()
    {
        // Arrange
        await _repository.AddAsync(new Space("Name1"));
        await _repository.AddAsync(new Space("Name2"));

        // Act
        var spaces = await _repository.GetAllAsync();

        // Assert
        Assert.NotEmpty(spaces);
        Assert.Equal(2, spaces.Count());
    }

    [Fact]
    public async Task GetAllAsync_ActHaveNotExistingSpaces_ShouldReturnsNull()
    {
        // Arrange
        var id = Guid.NewGuid();

        // Act
        var space = await _repository.GetByIdAsync(id);

        // Assert
        Assert.Null(space);
    }

    [Fact]
    public async Task AddAsync_ShouldCreateSpace()
    {
        // Arrange
        var space = new Space("Name1");

        // Act 
        await _repository.AddAsync(space);

        // Assert
        var retrieved = await _repository.GetByIdAsync(space.Id);

        Assert.NotNull(retrieved);
        Assert.Equal(space.Id, retrieved.Id);
        Assert.Equal(space.Name, retrieved.Name);
    }

    [Fact]
    public async Task UpdateAsync_ShouldUpdateSpace()
    {
        // Arrange
        var space = new Space("Name1");
        await _repository.AddAsync(space);

        // Act
        space.Name = "Name2";
        await _repository.UpdateAsync(space);

        // Assert
        var retrieved = await _repository.GetByIdAsync(space.Id);

        Assert.NotNull(retrieved);
        Assert.Equal(space.Id, retrieved.Id);
        Assert.Equal(space.Name, retrieved.Name);
    }

    [Fact]
    public async Task DeleteAsync_ShouldDeleteSpace()
    {
        // Arrange
        var space = new Space("Name1");
        await _repository.AddAsync(space);

        // Act
        await _repository.DeleteAsync(space);

        // Assert
        var retrieved = await _repository.GetByIdAsync(space.Id);
        Assert.Null(retrieved);
    }
}
