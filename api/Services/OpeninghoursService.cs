public class OpeninghoursService
{
    public Object createNewDay(NewOpeninghours newOpeninghours)
    {
        String sql = $"INSERT INTO Openinghours(days, isOpen, open, close, showCutomText, customText, isTimeLimited, startDate, endDate, orderposition)VALUES ('{newOpeninghours.days}', {newOpeninghours.isOpen}, '{newOpeninghours.open.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', '{newOpeninghours.close.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', {newOpeninghours.showCutomText}, '{newOpeninghours.customText}', {newOpeninghours.isTimeLimited}, '{newOpeninghours.startDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', '{newOpeninghours.endDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', {newOpeninghours.orderposition} );";
        List<List<String>> data = DatabaseService.query(sql);

        for (int i = 0; i < data.Count; i++)
        {
            for (int j = 0; j < data[i].Count; j++)
            {
                Console.Write(data[i][j]);
            }
            Console.WriteLine("");
        }

        return new { st = "st" };
    }

    public List<Openinghours> getDays()
    {
        String sql = $"SELECT * FROM Openinghours WHERE startDate <= '{DateTime.Now.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}'::date AND endDate >= '{DateTime.Now.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}'::date ORDER BY orderposition";

        List<List<String>> data = DatabaseService.query(sql);
        List<Openinghours> openinghoursList = new List<Openinghours>();

        for (int i = 0; i < data.Count; i++)
        {
            openinghoursList.Add(new Openinghours(Int32.Parse(data[i][0]), data[i][1], bool.Parse(data[i][2]), DateTime.Parse(data[i][3]), DateTime.Parse(data[i][4]), bool.Parse(data[i][5]), data[i][6], bool.Parse(data[i][7]), DateTime.Parse(data[i][8]), DateTime.Parse(data[i][9]), int.Parse(data[i][10])));
        }

        return openinghoursList;
    }

    public List<Openinghours> getAllDays()
    {
        String sql = $"SELECT * FROM Openinghours ORDER BY orderposition";

        List<List<String>> data = DatabaseService.query(sql);
        List<Openinghours> openinghoursList = new List<Openinghours>();

        for (int i = 0; i < data.Count; i++)
        {
            openinghoursList.Add(new Openinghours(Int32.Parse(data[i][0]), data[i][1], bool.Parse(data[i][2]), DateTime.Parse(data[i][3]), DateTime.Parse(data[i][4]), bool.Parse(data[i][5]), data[i][6], bool.Parse(data[i][7]), DateTime.Parse(data[i][8]), DateTime.Parse(data[i][9]), int.Parse(data[i][10])));
        }

        return openinghoursList;
    }

    public Object editOpeninghours(Openinghours payload)
    {
        String sql = $"UPDATE Openinghours Set days = '{payload.days}', isOpen = {payload.isOpen}, open = '{payload.open.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', close = '{payload.close.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', showCutomText = {payload.showCutomText}, customText = '{payload.customText}', isTimeLimited = {payload.isTimeLimited}, startDate = '{payload.startDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', endDate = '{payload.endDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}' WHERE id = {payload.id}";
        List<List<String>> data = DatabaseService.query(sql);

        return new { st = "st" };
    }

    public Object deleteOpeninghours(OpeninghoursId payload)
    {
        String sql = $"DELETE FROM Openinghours WHERE id = {payload.id}";
        List<List<String>> data = DatabaseService.query(sql);

        return new { st = "st" };
    }
}