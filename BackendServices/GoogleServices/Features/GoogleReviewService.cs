using Domain.Models.Reviews;
using Domain.Options;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace GoogleServices.Features;
public class GoogleReviewService(
    IOptions<FunctionOptions> options)
{
    private readonly static JsonSerializerOptions JsonSerializerOptions = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public async Task<GoogleReviews> GetGoogleRatings()
    {
        string url = $"https://places.googleapis.com/v1/places/{options.Value.GooglePlaceId}?fields=reviews,rating&languageCode=de&key={options.Value.GoogleApiKey}";

        HttpClient request = new();
        HttpResponseMessage response = await request.GetAsync(url);

        string jsonString = await response.Content.ReadAsStringAsync();

        GoogleReviews reviews = JsonSerializer.Deserialize<GoogleReviews>(jsonString, options: JsonSerializerOptions)!;
        return reviews;
    }
}
