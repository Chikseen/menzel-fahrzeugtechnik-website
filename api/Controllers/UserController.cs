using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

[ApiController]
[Route("User")]
public class UserController : ControllerBase
{

    private DatabaseService databaseService;
    public UserController()
    {
        databaseService = new DatabaseService();
    }


    [HttpGet("{value}")]
    public Boolean CheckKey(int value)
    {
        return databaseService.getUserById(value);
    }

    [HttpPost]
    public User CreateUser(NewUser newuser)
    {
        User user = new User();
        int value = databaseService.createNewUser(newuser.name);

        return user;
    }
}