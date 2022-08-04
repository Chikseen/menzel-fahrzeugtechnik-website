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
}