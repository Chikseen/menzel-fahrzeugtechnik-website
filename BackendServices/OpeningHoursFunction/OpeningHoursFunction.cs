using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using OpeningHoursFunction.Models;
using OpeningHoursFunction.Services;
using System.Threading.Tasks;

namespace OpeningHoursFunction;

public class OpeningHoursFunction(
    OpeningHoursService openingHoursService)
{
    [Function(nameof(OpeningHoursFunction))]
    public async Task<OpeningHours> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req)
    {
        OpeningHours openingHours = await openingHoursService.GetOpeningHours();
        return openingHours;
    }
}
