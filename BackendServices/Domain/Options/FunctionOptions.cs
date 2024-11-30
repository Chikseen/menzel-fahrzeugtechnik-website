namespace Domain.Options;

public class FunctionOptions
{
    public required string AzureStorageConnectionString { get; set; }
    public required string GooglePlaceId { get; set; }
    public required string GoogleApiKey { get; set; }
}
