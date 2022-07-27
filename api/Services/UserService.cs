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

    public List<String> getAllUserNames(String value)
    {
        Boolean userExits = checkUserExits(value);
        if (userExits)
        {
            String sql = $"SELECT name, id FROM Keys";
            List<List<String>> data = DatabaseService.query(sql);

            var users = new List<String>();

            for (int i = 0; i < data.Count; i++)
            {
                String tuser = "";
                tuser += data[i][0];
                users.Add(tuser);
            }

            return users;
        }
        return new List<String>();
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
}