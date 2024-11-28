using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using OpeningHoursFunction.Models;
using OpeningHoursFunction.Services;
using System.Net;
using System.Threading.Tasks;

namespace OpeningHoursFunction;

public class OpeningHoursFunction(
    OpeningHoursService openingHoursService)
{
    [Function(nameof(OpeningHoursFunction))]
    public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData request)
    {
        OpeningHours openingHours = await openingHoursService.GetOpeningHours();

        var response = request.CreateResponse(HttpStatusCode.OK);

        await response.WriteAsJsonAsync(openingHours);
        response.Headers.Add("Cache-Control", "max-age=259200");
        response.Headers.Add("Access-Control-Allow-Origin", "*");
        response.Headers.Add("Access-Control-Allow-Methods", "GET");
        response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Your-Custom-Header");

        return response;
    }
}
