using Domain.Models.OpeningHours;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using OpeningHoursFunction.Services;
using System;
using System.Net;
using System.Threading.Tasks;

namespace OpeningHoursHttpFunction;

public class OpeningHoursFunction(
    ILogger<OpeningHoursFunction> logger,
    OpeningHoursService openingHoursService)
{
    [Function(nameof(OpeningHoursFunction))]
    public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData request)
    {
        try
        {
            logger.LogInformation($"Fetched at {DateTime.UtcNow.ToString()}");

            OpeningHours openingHours = await openingHoursService.GetOpeningHours();

            HttpResponseData response = request.CreateResponse(HttpStatusCode.OK);

            await response.WriteAsJsonAsync(openingHours);
            response.Headers.Add("Cache-Control", "max-age=300");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Headers.Add("Access-Control-Allow-Methods", "GET");
            response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Your-Custom-Header");

            return response;
        }
        catch (Exception exception)
        {
            logger.LogError(exception.Message);
            return request.CreateResponse(HttpStatusCode.InternalServerError);
        }
    }
}