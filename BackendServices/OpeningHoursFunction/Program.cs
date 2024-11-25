using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OpeningHoursFunction.Models;
using OpeningHoursFunction.Services;

namespace OpeningHoursFunction;

internal class Program
{
    static void Main(string[] args)
    {
        IHost host = new HostBuilder()
            .ConfigureFunctionsWorkerDefaults()
            .ConfigureServices(services =>
            {
                services.AddApplicationInsightsTelemetryWorkerService();
                services.ConfigureFunctionsApplicationInsights();
                services.AddOptions<FunctionOptions>();

                services.AddOptions<FunctionOptions>()
                .Configure<IConfiguration>((settings, configuration) =>
                    configuration.GetSection(nameof(FunctionOptions)).Bind(settings));

                services.AddScoped<OpeningHoursService>();  
                services.AddScoped<GoogleService>();  
                services.AddScoped<AzureBlobService>();

            })
            .Build();

        host.Run();
    }
}

// Pipeline Test