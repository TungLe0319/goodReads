using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using MySqlConnector;

namespace goodReads;

public class Startup
{
  public Startup(IConfiguration configuration)
  {
    Configuration = configuration;
  }

  public IConfiguration Configuration { get; }

  // This method gets called by the runtime. Use this method to add services to the container.
  public void ConfigureServices(IServiceCollection services)
  {
    ConfigureCors(services);
    ConfigureAuth(services);
    services.AddControllers();
    services.AddSignalR(cfg => cfg.EnableDetailedErrors = true);
    services.AddSwaggerGen(c =>
    {
      c.SwaggerDoc("v1", new OpenApiInfo { Title = "goodReads", Version = "v1" });
    });
    services.AddSingleton<Auth0Provider>();
    services.AddScoped<IDbConnection>(x => CreateDbConnection());

    services.AddScoped<AccountsRepository>();
    services.AddScoped<AccountService>();

    services.AddTransient<ReviewsRepository>();
    services.AddTransient<ReviewsService>();

    services.AddTransient<BookShelvesRepository>();
    services.AddTransient<BookShelvesService>();

    services.AddTransient<BooksRepository>();
    services.AddTransient<BooksService>();

    services.AddTransient<FollowsRepository>();
    services.AddTransient<FollowsService>();

    services.AddTransient<ShelvedBooksRepository>();
    services.AddTransient<ShelvedBookService>();

    services.AddTransient<FeedBacksRepository>();
    services.AddTransient<FeedBacksService>();

    services.AddTransient<ProfilesRepository>();
    services.AddTransient<ProfilesService>();
    services.AddTransient<FavoriteBooksRepository>();
    services.AddTransient<FavoriteBooksService>();


  }

  private void ConfigureCors(IServiceCollection services)
  {
    services.AddCors(options =>
    {
      options.AddPolicy("CorsDevPolicy", builder =>
            {
              builder
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
                .WithOrigins(new string[]{
                "http://localhost:8080", "http://localhost:8081"
            });
            });
    });
  }

  private void ConfigureAuth(IServiceCollection services)
  {
    services.AddAuthentication(options =>
    {
      options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
      options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(options =>
    {
      options.Authority = $"https://{Configuration["AUTH0_DOMAIN"]}/";
      options.Audience = Configuration["AUTH0_AUDIENCE"];
    });

  }

  private IDbConnection CreateDbConnection()
  {
    string connectionString = Configuration["CONNECTION_STRING"];
    return new MySqlConnection(connectionString.Trim('\''));
  }


  // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
    if (env.IsDevelopment())
    {
      app.UseDeveloperExceptionPage();
      app.UseSwagger();
      app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Jot v1"));
      app.UseCors("CorsDevPolicy");
    }

    app.UseHttpsRedirection();

    app.UseDefaultFiles();
    app.UseStaticFiles();

    app.UseRouting();

    app.UseAuthentication();

    app.UseAuthorization();



    app.UseEndpoints(endpoints =>
    {
      endpoints.MapControllers();
      endpoints.MapHub<ChatHub>("/chathub");
    });
  }
}

