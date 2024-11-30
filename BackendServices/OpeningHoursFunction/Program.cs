using AzureServices.Extensions;
using Domain.Options;
using GoogleServices.Extensions;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OpeningHoursFunction.Services;

IHostBuilder host = new HostBuilder().ConfigureFunctionsWorkerDefaults();

host.ConfigureAppConfiguration((hostingContext, config) =>
{
    config.AddJsonFile("secrets.json",
        optional: true,
        reloadOnChange: true);
});

host.ConfigureServices((hostContext, services) =>
{
    services.AddApplicationInsightsTelemetryWorkerService();
    services.ConfigureFunctionsApplicationInsights();

    services.Configure<FunctionOptions>(
        hostContext.Configuration.GetSection(nameof(FunctionOptions)));

    services.AddScoped<OpeningHoursService>();

    services.AddGoogleServices();
    services.AddAzureServices();
});

host.Build().Run();
