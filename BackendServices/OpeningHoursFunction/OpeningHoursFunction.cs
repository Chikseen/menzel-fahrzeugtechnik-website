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
    public async Task<OpeningHours> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req)
    {
        OpeningHours openingHours = await openingHoursService.GetOpeningHours();

        HttpResponseData response = req.CreateResponse(HttpStatusCode.OK);
        response.Headers.Add("Content-Type", "text/plain; charset=utf-8");

        response.WriteString("Welcome to Azure Functions!");

        return openingHours;
    }
}
