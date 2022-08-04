
public class User
{
    public int id { get; set; }
    public int value { get; set; }
    public String? name { get; set; }
    public String? date { get; set; }
}
public class NewUser
{
    public String name { get; set; }
}

public class ValidateUser
{
    public String value { get; set; }
}
public class AllUser
{
    public String name { get; set; }
    public String value { get; set; }

    public AllUser(String name, String value)
    {
        this.name = name;
        this.value = value;
    }
}