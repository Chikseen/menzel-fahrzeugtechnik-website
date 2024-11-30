using AzureServices.Features;
using Domain.Models.OpeningHours;
using GoogleServices.Features;
using System;
using System.Threading.Tasks;

namespace OpeningHoursFunction.Services;

public class OpeningHoursService(
    GoogleOpeningHoursService googleService,
    AzureBlobService azureBlobService)
{
    public async Task<OpeningHours> GetOpeningHours()
    {
        OpeningHours? openingHours = await azureBlobService.GetBlob<OpeningHours>();

        if (openingHours is null)
            return await FetchAndUploadGoogleData();

        bool? isOpen = openingHours.CurrentOpeningHours?.OpenNow;
        DateTime? nextOpenTime = openingHours?.CurrentOpeningHours?.NextOpenTime.ToUniversalTime();
        DateTime? nextCloseTime = openingHours?.CurrentOpeningHours?.NextCloseTime.ToUniversalTime();

        if (isOpen is null)
            return await FetchAndUploadGoogleData();

        if (!(bool)isOpen && nextOpenTime < DateTime.UtcNow)
            return await FetchAndUploadGoogleData();

        if ((bool)isOpen && nextCloseTime < DateTime.UtcNow)
            return await FetchAndUploadGoogleData();

        return openingHours!;
    }

    private async Task<OpeningHours> FetchAndUploadGoogleData()
    {
        OpeningHours googleData = await googleService.GetGoogleOpeninghours();
        azureBlobService.UploadBlob(googleData);

        return googleData;
    }
}
