public class OpeninghoursService
{
    public Object createNewDay(NewOpeninghours payload)
    {
        List<String> weekdays = payload.weekdays.Select(x => x.ToString()).ToList();
        string weekdaysString = string.Join(",", weekdays);
        String sql = "";
        if (weekdaysString == "")
            sql = $"INSERT INTO Openinghours(days, isOpen, open, close, showCutomText, customText, isTimeLimited, startDate, endDate, orderposition, allowWeekdays)VALUES ('{payload.days}', {payload.isOpen}, '{payload.open.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', '{payload.close.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', {payload.showCutomText}, '{payload.customText}', {payload.isTimeLimited}, '{payload.startDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', '{payload.endDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', {payload.orderposition}, {payload.allowWeekdays} );";
        else
            sql = $"INSERT INTO Openinghours(days, isOpen, open, close, showCutomText, customText, isTimeLimited, startDate, endDate, orderposition, allowWeekdays, weekdays)VALUES ('{payload.days}', {payload.isOpen}, '{payload.open.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', '{payload.close.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', {payload.showCutomText}, '{payload.customText}', {payload.isTimeLimited}, '{payload.startDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', '{payload.endDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', {payload.orderposition}, {payload.allowWeekdays}, array[{weekdaysString}] );";


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
        String sql = $"SELECT * FROM Openinghours WHERE (startDate <= '{DateTime.Now.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}'::date AND endDate >= '{DateTime.Now.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}'::date) OR NOT isTimeLimited ORDER BY orderposition";

        List<List<String>> data = DatabaseService.query(sql);
        List<Openinghours> openinghoursList = new List<Openinghours>();

        for (int i = 0; i < data.Count; i++)
        {
            openinghoursList.Add(new Openinghours(Int32.Parse(data[i][0]), data[i][1], bool.Parse(data[i][2]), DateTime.Parse(data[i][3]), DateTime.Parse(data[i][4]), bool.Parse(data[i][5]), data[i][6], bool.Parse(data[i][7]), DateTime.Parse(data[i][8]), DateTime.Parse(data[i][9]), int.Parse(data[i][10]), bool.Parse(data[i][11]), data[i][12]));
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
            openinghoursList.Add(new Openinghours(Int32.Parse(data[i][0]), data[i][1], bool.Parse(data[i][2]), DateTime.Parse(data[i][3]), DateTime.Parse(data[i][4]), bool.Parse(data[i][5]), data[i][6], bool.Parse(data[i][7]), DateTime.Parse(data[i][8]), DateTime.Parse(data[i][9]), int.Parse(data[i][10]), bool.Parse(data[i][11]), data[i][12]));
        }

        return openinghoursList;
    }

    public OpeninghoursWeekdays[] getWeekdays()
    {
        String sql = $"SELECT open, close, weekdays FROM openinghours WHERE allowWeekdays AND isOpen AND (startDate <= '{DateTime.Now.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}'::date AND endDate >= '{DateTime.Now.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}'::date) OR NOT isTimeLimited AND weekdays IS NOT NULL ORDER BY orderposition";

        List<List<String>> data = DatabaseService.query(sql);
        List<Openinghours> openinghoursList = new List<Openinghours>();
        OpeninghoursWeekdays[] weekdays = new OpeninghoursWeekdays[7];

        for (int i = 0; i < data.Count; i++)
        {
            List<int> daysOfRow = new List<int>();
            daysOfRow = data[i][2].Split(",#,").Select(x => Int32.Parse(x)).ToList();

            for (int j = 0; j < daysOfRow.Count(); j++)
            {
                if (weekdays[daysOfRow[j]] == null)
                {
                    weekdays[daysOfRow[j]] = new OpeninghoursWeekdays(DateTime.Parse(data[i][0]), DateTime.Parse(data[i][1]) ,daysOfRow[j]);
                }
            }
        }

        return weekdays;
    }

    public Object editOpeninghours(EditOpeninghours payload)
    {
        List<String> weekdays = payload.weekdays.Select(x => x.ToString()).ToList();
        string weekdaysString = string.Join(",", weekdays);
        String sql = "";
        if (weekdaysString == "")
            sql = $"UPDATE Openinghours Set days = '{payload.days}', isOpen = {payload.isOpen}, open = '{payload.open.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', close = '{payload.close.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', showCutomText = {payload.showCutomText}, customText = '{payload.customText}', isTimeLimited = {payload.isTimeLimited}, startDate = '{payload.startDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', endDate = '{payload.endDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', orderposition = {payload.orderposition}, allowWeekdays = {payload.allowWeekdays}, weekdays = null WHERE id = {payload.id}";
        else
            sql = $"UPDATE Openinghours Set days = '{payload.days}', isOpen = {payload.isOpen}, open = '{payload.open.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', close = '{payload.close.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', showCutomText = {payload.showCutomText}, customText = '{payload.customText}', isTimeLimited = {payload.isTimeLimited}, startDate = '{payload.startDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', endDate = '{payload.endDate.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz")}', orderposition = {payload.orderposition}, allowWeekdays = {payload.allowWeekdays}, weekdays = array[{weekdaysString}] WHERE id = {payload.id}";

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