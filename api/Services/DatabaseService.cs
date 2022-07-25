using Npgsql;
public class DatabaseService
{
    private string name = "";
    private string location = "";
    private NpgsqlConnection con;
    private String postgresPassword = System.Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");

    public DatabaseService()
    {
        Console.WriteLine("postgresPassword");
        Console.WriteLine(postgresPassword);
        var cs = "Host=localhost;Port=5432;Username=admin;Password=12345678;Database=test";
        con = new NpgsqlConnection(cs);
        con.Open();
    }

    ~DatabaseService()
    {
        con.Close();
    }

    public void createNewUser(String userName, int userId)
    {
        var sql = "INSERT INTO Keys VALUES (" + userId + ", '" + userName + "');";
        Console.WriteLine(sql);
        NpgsqlCommand command = new NpgsqlCommand(sql, con);
        NpgsqlDataReader dr = command.ExecuteReader();

    }


    public String getAllUser()
    {
        var sql = "SELECT * FROM Keys";
        Console.WriteLine(sql);
        NpgsqlCommand command = new NpgsqlCommand(sql, con);
        NpgsqlDataReader dr = command.ExecuteReader();

        String version = "";

        while (dr.Read())
        {
            Console.Write("{0}\t{1} \n", dr[0], dr[1]);
            version += dr[0] + "\t";
            version += dr[1] + "\t";
            version += "\n";
        }

        return version;
    }

    public String dbInit()
    {
        Console.WriteLine("DB Init");

        try
        {
            var sql = "CREATE TABLE IF NOT EXITS Keys (Id SERIAL PRIMARY KEY, value numeric NOT NULL, name VARCHAR(255), created DATE NOT NULL DEFAULT CURRENT_DATE);";
            Console.WriteLine(sql);
            NpgsqlCommand command = new NpgsqlCommand(sql, con);
            NpgsqlDataReader dr = command.ExecuteReader();
        }
        catch (System.Exception)
        {
            Console.WriteLine("Error While creating Keys Table");
            return "error_creating_table_keys";
        }

        con.Close();
        return "success";
    }
}