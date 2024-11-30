using GoogleServices.Features;
using Microsoft.Extensions.DependencyInjection;

namespace GoogleServices.Extensions;

public static class AddGoogleServicesExtension
{
    public static void AddGoogleServices(this IServiceCollection services)
    {
        services.AddScoped<GoogleOpeningHoursService>();
        services.AddScoped<GoogleReviewService>();
    }
}
