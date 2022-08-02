
public class NewsService
{
    public List<News> getActiveNotifications()
    {
        String sql = $"SELECT * FROM notifications WHERE isactive = true";
        List<List<String>> data = DatabaseService.query(sql);
        List<News> notifications = new List<News>();

        return notifications;
    }
}