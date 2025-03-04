using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Todolab.Core.Spaces;

namespace Todolab.Infrastructure.Persistence.Configurations;

public class SpaceConfiguration : IEntityTypeConfiguration<Space>
{
    public void Configure(EntityTypeBuilder<Space> builder)
    {
        builder.ToTable(nameof(Space));

        builder.HasKey(space => space.Id);

        builder.Property(space => space.Name)
            .IsRequired();
    }
}