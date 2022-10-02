using facultyportal_backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Connect to database
string connString = builder.Configuration.GetConnectionString("FPLocalDbConnection");
builder.Services.AddDbContext<FacultyPortalDbContext>(options =>
    options.UseSqlServer(connString));

// Enable Cross-Origin Requests (CORS)
builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

//// JSON Serializer
//builder.Services.AddControllersWithViews().AddNewtonsoftJson(options =>
//    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
//        .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
//        = new DefaultContractResolver());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable CORS
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapControllers();
//    //endpoints.MapFallbackToController("Index","Fallback");
//});

app.Run();
