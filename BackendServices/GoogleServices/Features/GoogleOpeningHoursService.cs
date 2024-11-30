using Domain.Models.OpeningHours;
using Domain.Models.Reviews;
using Domain.Options;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace GoogleServices.Features;

public class GoogleOpeningHoursService(
    IOptions<FunctionOptions> options)
{
    private readonly static JsonSerializerOptions JsonSerializerOptions = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public async Task<OpeningHours> GetGoogleOpeninghours()
    {
        string url = $"https://places.googleapis.com/v1/places/{options.Value.GooglePlaceId}?fields=currentOpeningHours&languageCode=de&key={options.Value.GoogleApiKey}";

        HttpClient request = new();
        HttpResponseMessage response = await request.GetAsync(url);

        string jsonString = await response.Content.ReadAsStringAsync();

        OpeningHours openingHours = JsonSerializer.Deserialize<OpeningHours>(jsonString, options: JsonSerializerOptions)!;
        return openingHours;
    }
}
