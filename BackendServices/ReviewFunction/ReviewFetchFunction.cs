using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using ReviewFunction.Services;

namespace ReviewFunction;

public class ReviewFetchFunction(
    ILogger<ReviewFetchFunction> logger,
    FetchReviewService fetchReviewService)
{
    [Function(nameof(ReviewFetchFunction))]
    public async Task Run([TimerTrigger("0 0 * * 0", RunOnStartup = true)] TimerInfo myTimer)
    {
        logger.LogInformation($"Fetch current Google reviews at {DateTime.UtcNow.ToString()}");
        if (myTimer.ScheduleStatus is not null)
        {
            logger.LogInformation($"Next timer schedule at: {myTimer.ScheduleStatus.Next}");
        }

        try
        {
            await fetchReviewService.GetAndStoreGoogleReviews();
        }
        catch (Exception exception)
        {
            logger.LogError(exception.Message);
        }
    }
}
