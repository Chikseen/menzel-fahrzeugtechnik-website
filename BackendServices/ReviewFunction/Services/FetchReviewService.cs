using AzureServices.Features;
using Domain.Models.Reviews;
using GoogleServices.Features;

namespace ReviewFunction.Services;

public class FetchReviewService(
    GoogleReviewService googleServices,
    AzureBlobService azureBlobService)
{
    public async Task GetAndStoreGoogleReviews()
    {
        GoogleReviews googleReviews = await googleServices.GetGoogleRatings();
        azureBlobService.UploadBlob(googleReviews);
    }
}
