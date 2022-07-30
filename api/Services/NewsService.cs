
public class NewsService
{
    public List<News> getActiveNotifications()
    {
        String sql = $"SELECT * FROM notifications WHERE isactive = true";
        List<List<String>> data = DatabaseService.query(sql);
        List<News> notifications = new List<News>();

        for (int i = 0; i < data.Count; i++)
        {
            notifications.Add(new News(Int32.Parse(data[i][0]), DateTime.Parse(data[i][1]), DateTime.Parse(data[i][2]), data[i][3], data[i][4], data[i][5], bool.Parse(data[i][6]), data[i][7]));
        }

        return notifications;
    }
}