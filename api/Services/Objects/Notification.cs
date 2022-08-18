
public class Notification
{
    public int id { get; set; }
    public DateTime startDate { get; set; }
    public DateTime endDate { get; set; }
    public string? titel { get; set; }
    public string? text { get; set; }
    public String? color { get; set; }
    public Boolean isActive { get; set; }
    public string? created { get; set; }

    public Notification(int id, DateTime startDate, DateTime endDate, string titel, string text, String color, Boolean isActive, string created)
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

public class NewNotification
{
    public DateTime startDate { get; set; }
    public DateTime endDate { get; set; }
    public string? titel { get; set; }
    public string? text { get; set; }
    public String? color { get; set; }
    public Boolean isActive { get; set; }
}

public class NotificationId
{
    public int id { get; set; }
}

public class NotificationColor
{
    public static String red { get { return "red"; } }
    public static String green { get { return "green"; } }
    public static String white { get { return "white"; } }
}