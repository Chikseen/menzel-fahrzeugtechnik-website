
public class News
{
    public int id { get; set; }
    public string? titel { get; set; }
    public string? text { get; set; }
    public DateTime created { get; set; }
    public String[] images { get; set; }
}

public class NewNews
{

    public string? titel { get; set; }
    public string? text { get; set; }
    public DateTime created { get; set; }
    public String[] images { get; set; }
}

public class NewsId
{
    public int id { get; set; }
}


public class ImageUpload

{
}
