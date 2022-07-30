using Npgsql;
using dotenv.net;

public static class DatabaseService
{
    private static string name = "";
    private static string location = "";
    private static NpgsqlConnection con;
    private static String postgresHost = "";
    private static String postgresPort = "";
    private static String postgresUser = "";
    private static String postgresPassword = "";
    private static String postgresDatabase = "";

    static DatabaseService()
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
    }

    public static List<List<String>> query(String sql)
    {
        var columns = new List<List<String>>();
        try
        {
            if (con.State != System.Data.ConnectionState.Open)
                con.Open();

            Console.WriteLine(sql);
            NpgsqlCommand command = new NpgsqlCommand(sql, con);
            NpgsqlDataReader dr = command.ExecuteReader();

            while (dr.Read())
            {
                var rows = new List<String>();
                for (int i = 0; i < dr.FieldCount; i++)
                    rows.Add($"{dr[i]}");

                columns.Add(rows);
            }

            con.Close();
            return columns;
        }
        catch (System.Exception e)
        {
            Console.WriteLine(e);
            con.Close();
            throw;
        }
    }

    public static String dbInit()
    {
        Console.WriteLine("DB Init");

        // __________ COLOR ENUMS __________
        try
        {
            con.Open();
            var sql = "CREATE TYPE color AS ENUM ('red', 'green', 'white');";
            Console.WriteLine(sql);
            NpgsqlCommand command = new NpgsqlCommand(sql, con);
            NpgsqlDataReader dr = command.ExecuteReader();
        }
        catch (System.Exception)
        {
            Console.WriteLine("Error While creating Color Enum, It may alrady exists and this error can be ignored");
        }
        con.Close();

        // __________ USERTABLE __________
        try
        {
            con.Open();
            var sql = "CREATE TABLE IF NOT EXISTS Keys (id SERIAL PRIMARY KEY, value VARCHAR(255) NOT NULL, name VARCHAR(255), created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);";
            Console.WriteLine(sql);
            NpgsqlCommand command = new NpgsqlCommand(sql, con);
            NpgsqlDataReader dr = command.ExecuteReader();
        }
        catch (System.Exception e)
        {
            Console.WriteLine("Error While creating Keys Table");
            Console.WriteLine(e);
            con.Close();
            return "error_creating_table_keys";
        }
        con.Close();

        // __________ Notifications __________
        try
        {
            con.Open();
            var sql = "CREATE TABLE IF NOT EXISTS Notifications (id SERIAL PRIMARY KEY, startDate TIMESTAMP WITH TIME ZONE, endDate TIMESTAMP WITH TIME ZONE, titel VARCHAR(255),  text TEXT NOT NULL, color color, isActive boolean, created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);";
            Console.WriteLine(sql);
            NpgsqlCommand command = new NpgsqlCommand(sql, con);
            NpgsqlDataReader dr = command.ExecuteReader();
        }
        catch (System.Exception e)
        {
            Console.WriteLine("Error While creating Notifications Table");
            Console.WriteLine(e);
            con.Close();
            return "error_creating_table_notifications";
        }
        con.Close();

        // __________ Openinghours __________
        try
        {
            con.Open();
            var sql = "CREATE TABLE IF NOT EXISTS Openinghours (id SERIAL PRIMARY KEY, days VARCHAR(255), isOpen boolean, open TIMESTAMP, close TIMESTAMP, showCutomText boolean, customText VARCHAR(255), isTimeLimited boolean, startDate TIMESTAMP, endDate TIMESTAMP, orderposition INT);";
            Console.WriteLine(sql);
            NpgsqlCommand command = new NpgsqlCommand(sql, con);
            NpgsqlDataReader dr = command.ExecuteReader();
        }
        catch (System.Exception e)
        {
            Console.WriteLine("Error While creating Openinghours Table");
            Console.WriteLine(e);
            con.Close();
            return "error_creating_table_openinghours";
        }
        con.Close();
        return "success";
    }
}