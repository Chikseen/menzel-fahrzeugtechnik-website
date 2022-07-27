
public class NotificationsService
{
    public List<Notification> getActiveNotifications()
    {
        String sql = $"SELECT * FROM notifications WHERE isactive = true";
        List<List<String>> data = DatabaseService.query(sql);
        List<Notification> notifications = new List<Notification>();

        for (int i = 0; i < data.Count; i++)
        {
            notifications.Add(new Notification(Int32.Parse(data[i][0]), DateTime.Parse(data[i][1]), DateTime.Parse(data[i][2]), data[i][3], data[i][4], data[i][5], bool.Parse(data[i][6]), data[i][7]));
        }

        return notifications;
    }

    public List<Notification> getAllNotifications()
    {
        String sql = $"SELECT * FROM notifications";
        List<List<String>> data = DatabaseService.query(sql);
        List<Notification> notifications = new List<Notification>();

        for (int i = 0; i < data.Count; i++)
        {
            notifications.Add(new Notification(Int32.Parse(data[i][0]), DateTime.Parse(data[i][1]), DateTime.Parse(data[i][2]), data[i][3], data[i][4], data[i][5], bool.Parse(data[i][6]), data[i][7]));
        }

        return notifications;
    }

    public Object setNewNotification(NewNotification payload)
    {
        String sql = $"INSERT INTO notifications(startDate, endDate, titel, text, color, isactive, created)VALUES ('{payload.startDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', '{payload.endDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', '{payload.titel}', '{payload.text}', '{payload.color}', '{payload.isActive}', NOW());";
        Console.WriteLine(sql);
        List<List<String>> data = DatabaseService.query(sql);

        return new { st = "st" };
    }

    public Object editNotifications(Notification payload)
    {
        String sql = $"UPDATE notifications Set startDate = '{payload.startDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', endDate = '{payload.endDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', titel = '{payload.titel}', text = '{payload.text}', color = '{payload.color}', isactive = '{payload.isActive}' WHERE id = {payload.id}";
        Console.WriteLine(sql);
        List<List<String>> data = DatabaseService.query(sql);

        return new { st = "st" };
    }

    public Object deleteNotification(NotificationId payload)
    {
        String sql = $"DELETE FROM notifications WHERE id = {payload.id}";
        Console.WriteLine(sql);
        List<List<String>> data = DatabaseService.query(sql);

        return new { st = "st" };
    }
}