using UAParser;

public class UserService
{
    public Object createNewUser(String name)
    {
        SecureString secureString = new SecureString();
        String value = secureString.CreateSecureRandomString();

        String sql = $"INSERT INTO Keys(value, name, created)VALUES ('{value}', '{name}', NOW());";
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

    public List<AllUser> getAllUserNames(String value)
    {
        Boolean userExits = checkUserExits(value);
        if (userExits)
        {
            String sql = $"SELECT name, value FROM Keys";
            List<List<String>> data = DatabaseService.query(sql);

            var users = new List<AllUser>();

            for (int i = 0; i < data.Count; i++)
            {
                users.Add(new AllUser(data[i][0], data[i][1]));
            }

            return users;
        }
        return new List<AllUser>();
    }

    public Boolean checkUserExits(String value)
    {
        String sql = $"SELECT * FROM Keys WHERE value = '{value}';";
        List<List<String>> data = DatabaseService.query(sql);

        var users = new List<String>();

        for (int i = 0; i < data.Count; i++)
        {
            String tuser = "Exits";
            users.Add(tuser);
        }

        if (users.Count > 0) return true;
        else return false;
    }

    public void deleteUser(String value)
    {
        String sql = $"DELETE FROM Keys WHERE value = '{value}';";
        List<List<String>> data = DatabaseService.query(sql);
    }

    public void countUser(String b, String route)
    {
        var userAgent = b;
        var uaParser = Parser.GetDefault();

        var year = DateTime.Now.ToString("yyyy");
        var month = DateTime.Now.ToString("MM");
        var day = DateTime.Now.ToString("dd");

        ClientInfo c = uaParser.Parse(userAgent);
        String sql = $"ALTER TABLE UserCount ADD COLUMN IF NOT EXISTS {c.UA.Family.Replace(" ", "_")} int DEFAULT 0;" +
                     $"INSERT INTO UserCount (id, year, month, day) VALUES ({year + month + day}, {year}, {month}, {day}) ON CONFLICT DO NOTHING;" +
                        $"UPDATE UserCount SET {c.UA.Family.Replace(" ", "_")} = {c.UA.Family.Replace(" ", "_")} + 1 WHERE id = {year + month + day};" +
                     $"ALTER TABLE UserCount ADD COLUMN IF NOT EXISTS {c.OS.Family.Replace(" ", "_")} int DEFAULT 0;" +
                        $"UPDATE UserCount SET {c.OS.Family.Replace(" ", "_")} = {c.OS.Family.Replace(" ", "_")} + 1 WHERE id = {year + month + day};" +
                     $"ALTER TABLE UserCount ADD COLUMN IF NOT EXISTS {c.Device.Family.Replace(" ", "_")} int DEFAULT 0;" +
                        $"UPDATE UserCount SET {c.Device.Family.Replace(" ", "_")} = {c.Device.Family.Replace(" ", "_")} + 1 WHERE id = {year + month + day};" +
                     $"ALTER TABLE UserCount ADD COLUMN IF NOT EXISTS {route} int DEFAULT 0;" +
                        $"UPDATE UserCount SET {route} = {route} + 1 WHERE id = {year + month + day};";
        DatabaseService.query(sql);
    }

    public Object getCount(String start, String end)
    {
        String sql = "";
        if (start == "-1" && end == "-1") sql = $"SELECT * FROM UserCount";
        else if (end == "-1") sql = $"SELECT * FROM UserCount WHERE id >= {start.Replace("-", "")}";
        else if (start == "-1") sql = $"SELECT * FROM UserCount WHERE id <= {end.Replace("-", "")}";
        else sql = $"SELECT * FROM UserCount WHERE id >= {start.Replace("-", "")} AND id <= {end.Replace("-", "")}";

        String columnNamesSQL = $"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'usercount';";
        List<List<String>> columnNames = DatabaseService.query(columnNamesSQL);
        List<String> header = new List<String>();
        for (int i = 0; i < columnNames.Count(); i++)
        {
            header.Add(columnNames[i][0]);
        }

        List<List<String>> data = DatabaseService.query(sql);

        return new { header = header, data = data };
    }
}