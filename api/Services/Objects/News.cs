
public class News
{
    public int id { get; set; }
    public DateTime created { get; set; }
    public string? titel { get; set; }
    public string? text { get; set; }
    public String[] images { get; set; }

    public News(int id, DateTime created, String titel, String text, String images)
    {
        this.id = id;
        this.created = created;
        this.titel = titel;
        this.text = text;
        this.images = images.Split(",#,"); ;
    }
}

public class NewNews
{
    public string? titel { get; set; }
    public string? text { get; set; }
    public String[] images { get; set; }
}

public class NewsId
{
    public int id { get; set; }
}

// IDK why cant use "News"
public class NewsEdit
{
    public int id { get; set; }
    public DateTime created { get; set; }
    public string? titel { get; set; }
    public string? text { get; set; }
    public String[] images { get; set; }
}

