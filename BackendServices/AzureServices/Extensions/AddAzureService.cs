using AzureServices.Features;
using Microsoft.Extensions.DependencyInjection;

namespace AzureServices.Extensions;

public static class AddAzureServicesExtension
{
    public static void AddAzureServices(this IServiceCollection services)
    {
        services.AddSingleton<AzureBlobClient>();
        services.AddScoped<AzureBlobService>();
    }
}
