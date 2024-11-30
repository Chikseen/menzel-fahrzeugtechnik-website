using Azure.Storage.Blobs;
using Domain.Options;
using Microsoft.Extensions.Options;

namespace AzureServices.Features;

public class AzureBlobClient(
    IOptions<FunctionOptions> options)
{
    public BlobClient GetBlobClient<BlobType>()
    {
        BlobServiceClient blobServiceClient = new(options.Value.AzureStorageConnectionString);

        BlobContainerClient blobContainer = blobServiceClient.GetBlobContainerClient(typeof(BlobType).Name.ToLower());

        blobContainer.CreateIfNotExists();

        BlobClient blob = blobContainer.GetBlobClient($"{typeof(BlobType).Name}.json");

        return blob;
    }
}
