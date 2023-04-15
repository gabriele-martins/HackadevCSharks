using Microsoft.EntityFrameworkCore;
using SharkBank.API.Data.Context;
using SharkBank.API.Data.Repositories;
using SharkBank.API.Domain.Interfaces.Repositories;
using SharkBank.API.Domain.Interfaces.Services;
using SharkBank.API.Domain.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var mySqlConnection = builder.Configuration.GetConnectionString("DataContext"); // Connection Database
builder.Services.AddDbContext<DataContext>
    (
        options => options.UseMySql(mySqlConnection, ServerVersion.AutoDetect(mySqlConnection))
    );
builder.Services.AddScoped<IUsuarioRepo, UsuarioRepo>();
builder.Services.AddScoped<IGeralRepo, GeralRepo>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
