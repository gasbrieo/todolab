using Todolab.Presentation.Configurations;
using Todolab.Presentation.Middlewares;

var builder = WebApplication.CreateBuilder(args);

builder.Host.AddLoggerConfigs();

builder.Services.AddControllersConfigs();
builder.Services.AddHttpClient();
builder.Services.AddServiceConfigs();
builder.Services.AddSwaggerConfigs();
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();

var app = builder.Build();

app.UseLoggerConfigs();
app.MapControllers();

if (app.Environment.IsDevelopment())
{
    app.UseSwaggerConfigs();
}

app.UseExceptionHandler(_ => { });

await app.RunAsync();