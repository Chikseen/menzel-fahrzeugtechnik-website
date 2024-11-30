using AzureServices.Features;
using Domain.Models.Reviews;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using ReviewFunction.Services;
using System.Net;

namespace ReviewFunction;

public class ReviewHttpFunction(
    ILogger<ReviewHttpFunction> logger,
    AzureBlobService azureBlobService,
    FetchReviewService fetchReviewService)
{
    [Function(nameof(ReviewHttpFunction))]
    public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData request)
    {
        logger.LogInformation($"Get Reviews at {DateTime.UtcNow.ToString()}");

        GoogleReviews? googleReviews = await azureBlobService.GetBlob<GoogleReviews>();

        if (googleReviews is null)
        {
            await fetchReviewService.GetAndStoreGoogleReviews();
            googleReviews = await azureBlobService.GetBlob<GoogleReviews>();
        }

        HttpResponseData response = request.CreateResponse(HttpStatusCode.OK);

        await response.WriteAsJsonAsync(googleReviews);
        response.Headers.Add("Cache-Control", "max-age=259200");
        response.Headers.Add("Access-Control-Allow-Origin", "*");
        response.Headers.Add("Access-Control-Allow-Methods", "GET");
        response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Your-Custom-Header");

        return response;
    }
}
