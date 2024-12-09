using AzureServices.Extensions;
using Domain.Options;
using GoogleServices.Extensions;
using Microsoft.Azure.Functions.Worker.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ReviewFunction.Services;

IHostBuilder host = new HostBuilder().ConfigureFunctionsWebApplication();

host.ConfigureAppConfiguration((hostingContext, config) =>
{
    config.AddJsonFile("secrets.json",
        optional: true,
        reloadOnChange: true);
});

host.ConfigureServices((hostContext, services) =>
{
    services.Configure<FunctionOptions>(
       hostContext.Configuration.GetSection(nameof(FunctionOptions)));

    services.AddScoped<FetchReviewService>();

    services.AddGoogleServices();
    services.AddAzureServices();
});

host.Build().Run();