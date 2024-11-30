namespace Domain.Models.Reviews;

public class Review
{
    public string Name { get; set; } = "";
    public string RelativePublishTimeDescription { get; set; } = "";
    public int Rating { get; set; } = 5;
    public AltText Text { get; set; } = new();
    public OriginalText OriginalText { get; set; } = new();
    public AuthorAttribution AuthorAttribution { get; set; } = new();
    public DateTime PublishTime { get; set; } = DateTime.UtcNow;
    public string FlagContentUri { get; set; } = "";
    public string GoogleMapsUri { get; set; } = "";
}