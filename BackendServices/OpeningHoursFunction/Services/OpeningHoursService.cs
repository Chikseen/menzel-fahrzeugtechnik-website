using OpeningHoursFunction.Models;
using System;
using System.Threading.Tasks;

namespace OpeningHoursFunction.Services;

public class OpeningHoursService(
    GoogleService googleService,
    AzureBlobService azureBlobService)
{
    public async Task<OpeningHours> GetOpeningHours()
    {
        OpeningHours? openingHours = await azureBlobService.GetOpeningHours();

        if (openingHours is null)
            return await FetchAndUploadGoogleData();

        DateTime? nextOpenTime = openingHours?.CurrentOpeningHours?.NextOpenTime.ToUniversalTime();

        if (nextOpenTime is null || nextOpenTime < DateTime.UtcNow)
            return await FetchAndUploadGoogleData();


        return openingHours;
    }

    private async Task<OpeningHours> FetchAndUploadGoogleData()
    {
        OpeningHours googleData = await googleService.GetGoogleOpeninghours();
        azureBlobService.SaveOpeningHours(googleData);

        return googleData;
    }
}
