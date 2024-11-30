using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using System.Text.Json;

namespace AzureServices.Features;

public class AzureBlobService(
    AzureBlobClient azureBlobClient)
{
    public async Task<BlobType?> GetBlob<BlobType>()
    {
        BlobClient blob = azureBlobClient.GetBlobClient<BlobType>();

        if (!blob.Exists())
            return default;

        BlobType payload = await DownloadBlob<BlobType>(blob);

        return payload;
    }

    public async Task<BlobType> DownloadBlob<BlobType>(BlobClient blob)
    {
        BlobDownloadResult downloadResult = await blob.DownloadContentAsync();
        string blobContents = downloadResult.Content.ToString();
        BlobType payload = JsonSerializer.Deserialize<BlobType>(blobContents)!;

        return payload;
    }

    public void UploadBlob<BlobType>(BlobType payload)
    {
        BlobClient blob = azureBlobClient.GetBlobClient<BlobType>();

        string jsonString = JsonSerializer.Serialize(payload);

        blob.Upload(BinaryData.FromString(jsonString), overwrite: true);
    }
}
