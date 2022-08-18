
public class NewsService
{
    public List<News> createNews(NewNews payload)
    {
        List<String> images = payload.images.Select(image => $"'{image}'").ToList();
        string imageString = string.Join(",", images);
        String sql = "";
        if (imageString == "")
            sql = $"INSERT INTO News(titel, text) VALUES ('{payload.titel}', '{payload.text}');";
        else
            sql = $"INSERT INTO News(titel, text, images) VALUES ('{payload.titel}', '{payload.text}', array[{imageString}]);";

        List<List<String>> data = DatabaseService.query(sql);
        List<News> notifications = new List<News>();

        return notifications;
    }

    public List<News> getNews(int limit, int offset)
    {
        String sql = $"SELECT * FROM News ORDER BY created DESC LIMIT {limit} OFFSET {offset}";
        List<List<String>> data = DatabaseService.query(sql);

        List<News> news = new List<News>();

        for (int i = 0; i < data.Count; i++)
        {
            news.Add(new News(Int32.Parse(data[i][0]), DateTime.Parse(data[i][1]), data[i][2], data[i][3], data[i][4]));
        }

        return news;
    }

    public List<News> editNews(NewsEdit payload)
    {
        List<String> images = payload.images.Select(image => $"'{image}'").ToList();
        string imageString = string.Join(",", images);
        String sql = "";
        if (imageString == "")
            sql = $"UPDATE News Set titel = '{payload.titel}', text = '{payload.text}' WHERE id = {payload.id}";
        else
            sql = $"UPDATE News Set titel = '{payload.titel}', text = '{payload.text}', images = array[{imageString}] WHERE id = {payload.id}";

        List<List<String>> data = DatabaseService.query(sql);
        List<News> notifications = new List<News>();

        return notifications;
    }

    public Object deleteNews(int id)
    {
        String sql = $"DELETE FROM News WHERE id = {id}";
        List<List<String>> data = DatabaseService.query(sql);

        return new { st = "st" };
    }
}