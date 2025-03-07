using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TodoLab.Core.TodoListAggregate;

namespace TodoLab.Infrastructure.Persistence.Configurations;

public class TodoListConfiguration : IEntityTypeConfiguration<TodoList>
{
    public void Configure(EntityTypeBuilder<TodoList> builder)
    {
        builder.ToTable(nameof(TodoList));

        builder.HasKey(todoList => todoList.Id);

        builder.Property(todoList => todoList.Name)
            .IsRequired();
    }
}