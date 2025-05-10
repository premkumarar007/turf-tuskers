using Microsoft.EntityFrameworkCore;
using turf_tuskers_backend.Data;
using turf_tuskers_backend.Services;

var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register DbContext
builder.Services.AddDbContext<TurfTuskersContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TurfTuskersDb")));

// Register custom services
builder.Services.AddScoped<MatchService>();
builder.Services.AddScoped<PlayerService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
