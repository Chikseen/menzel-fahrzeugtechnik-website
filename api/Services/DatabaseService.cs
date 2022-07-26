using Npgsql;
using dotenv.net;

public class DatabaseService
{
    private string name = "";
    private string location = "";
    private NpgsqlConnection con;
    private String postgresHost = "";
    private String postgresPort = "";
    private String postgresUser = "";
    private String postgresPassword = "";
    private String postgresDatabase = "";

    public DatabaseService()
    {
        DotEnv.Load();
        postgresHost = Environment.GetEnvironmentVariable("POSTGRES_HOST");
        postgresPort = Environment.GetEnvironmentVariable("POSTGRES_PORT");
        postgresUser = Environment.GetEnvironmentVariable("POSTGRES_USER");
        postgresPassword = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");
        postgresDatabase = Environment.GetEnvironmentVariable("POSTGRES_DATABASE");

        var cs = $"Host={postgresHost};Port={postgresPort};Username={postgresUser};Password={postgresPassword};Database={postgresDatabase}";
        Console.WriteLine($"con: {cs}");

        con = new NpgsqlConnection(cs);
        con.Open();
    }

    ~DatabaseService()
    {
        con.Close();
    }

    public int createNewUser(String name)
    {
        Random rd = new Random();
        int value = rd.Next(100000000, 999999999);
        String sql = $"INSERT INTO Keys(value, name, created)VALUES ({value}, '{name}', NOW());";
        Console.WriteLine(sql);
        NpgsqlCommand command = new NpgsqlCommand(sql, con);
        NpgsqlDataReader dr = command.ExecuteReader();
        return value;
    }


    public Boolean getUserById(int value)
    {
        var sql = $"SELECT * FROM Keys WHERE value = {value};";
        Console.WriteLine(sql);
        NpgsqlCommand command = new NpgsqlCommand(sql, con);
        NpgsqlDataReader dr = command.ExecuteReader();

        var users = new List<String>();

        while (dr.Read())
        {
            String tuser = "";
            Console.Write("{0} {1} {2} {3} \n", dr[0], dr[1], dr[2], dr[3]);
            tuser += dr[0] + " ";
            tuser += dr[1] + " ";
            tuser += dr[2] + " ";
            tuser += dr[3] + " ";
            tuser += "\n";
            users.Add(tuser);
        }
        Console.WriteLine(users.Count);
        if (users.Count > 0) return true;
        else return false;
    }

    public String dbInit()
    {
        Console.WriteLine("DB Init");

        try
        {
            var sql = "CREATE TABLE IF NOT EXISTS Keys (id SERIAL PRIMARY KEY, value numeric NOT NULL, name VARCHAR(255), created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);";
            Console.WriteLine(sql);
            NpgsqlCommand command = new NpgsqlCommand(sql, con);
            NpgsqlDataReader dr = command.ExecuteReader();
        }
        catch (System.Exception e)
        {
            Console.WriteLine("Error While creating Keys Table");
            Console.WriteLine(e);
            return "error_creating_table_keys";
        }

        con.Close();
        return "success";
    }
}