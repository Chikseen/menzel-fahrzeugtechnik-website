using Microsoft.Extensions.Options;
using OpeningHoursFunction.Models;
using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace OpeningHoursFunction.Services;

public class GoogleService(
    IOptions<FunctionOptions> options)
{
    public async Task<OpeningHours> GetGoogleOpeninghours()
    {
        string url = $"https://places.googleapis.com/v1/places/{options.Value.GooglePlaceId}?fields=currentOpeningHours&languageCode=de&key={options.Value.GoogleApiKey}";

        HttpClient request = new HttpClient();
        HttpResponseMessage response = await request.GetAsync(url);

        string jsonString = await response.Content.ReadAsStringAsync();

        OpeningHours openingHours = JsonSerializer.Deserialize<OpeningHours>(jsonString, options: new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
        return openingHours;
    }
}
