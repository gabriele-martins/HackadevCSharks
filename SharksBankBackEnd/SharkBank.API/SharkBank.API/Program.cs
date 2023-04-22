using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SharkBank.API;
using SharkBank.API.Data.Context;
using SharkBank.API.Data.Repositories;
using SharkBank.API.Domain.Interfaces.Repositories;
using SharkBank.API.Domain.Interfaces.Services;
using SharkBank.API.Domain.Services;
using System.Text;
using System.Text.Json.Serialization;

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
builder.Services.AddScoped<IContaRepo, ContaRepo>();
builder.Services.AddScoped<IContaService, ContaService>();
builder.Services.AddScoped<TokenService>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddControllers()
    .AddJsonOptions(opt =>
    {
        opt.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

var key = Encoding.ASCII.GetBytes(Settings.Secret);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddAuthentication(a =>
                {
                    a.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    a.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(a =>
                {
                    a.RequireHttpsMetadata = false;
                    a.SaveToken = true;
                    a.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key), 
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });
builder.Services.AddSwaggerGen();

builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy.WithOrigins("*").AllowAnyHeader().AllowAnyHeader())
);

var app = builder.Build();
app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
