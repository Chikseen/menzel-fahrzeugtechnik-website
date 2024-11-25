using Azure.Identity;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.Extensions.Options;
using OpeningHoursFunction.Models;
using System;
using System.Reflection.Metadata;
using System.Text.Json;
using System.Threading.Tasks;

namespace OpeningHoursFunction.Services;

public class AzureBlobService(
    IOptions<FunctionOptions> options)
{
    public async Task<OpeningHours?> GetOpeningHours()
    {
        BlobClient blob = GetBlobClient();

        if (!blob.Exists())
            return null;

        OpeningHours openingHours = await GetOpeningHoursFromBlob(blob);

        return openingHours;
    }

    public async Task<OpeningHours> GetOpeningHoursFromBlob(BlobClient blob)
    {
        BlobDownloadResult downloadResult = await blob.DownloadContentAsync();
        string blobContents = downloadResult.Content.ToString();
        OpeningHours openingHours = JsonSerializer.Deserialize<OpeningHours>(blobContents);

        return openingHours;
    }

    public void SaveOpeningHours(OpeningHours openingHours)
    {
        BlobClient blob = GetBlobClient();

        string jsonString = JsonSerializer.Serialize(openingHours);

        blob.Upload(BinaryData.FromString(jsonString), overwrite: true);
    }

    private BlobClient GetBlobClient()
    {
        BlobServiceClient blobServiceClient = new BlobServiceClient(options.Value.AzureStorageConnectionString);

        BlobContainerClient blobContainer = blobServiceClient.GetBlobContainerClient("openinghours");

        blobContainer.CreateIfNotExists();

        BlobClient blob = blobContainer.GetBlobClient("openinghours.json");

        return blob;
    }
}
