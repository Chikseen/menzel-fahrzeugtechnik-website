
public class News
{
    public int id { get; set; }
    public DateTime startDate { get; set; }
    public DateTime endDate { get; set; }
    public string? titel { get; set; }
    public string? text { get; set; }
    public String? color { get; set; }
    public Boolean isActive { get; set; }
    public string? created { get; set; }

    public News(int id, DateTime startDate, DateTime endDate, string titel, string text, String color, Boolean isActive, string created)
    {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.titel = titel;
        this.text = text;
        this.color = color;
        this.isActive = isActive;
        this.created = created;
    }
}

public class NewNews
{
    public DateTime startDate { get; set; }
    public DateTime endDate { get; set; }
    public string? titel { get; set; }
    public string? text { get; set; }
    public String? color { get; set; }
    public Boolean isActive { get; set; }
}

public class NewsId
{
    public int id { get; set; }
}


public class ImageUpload

{
    public string Name { get; set; }

    public IFormFile File { get; set; }
}
