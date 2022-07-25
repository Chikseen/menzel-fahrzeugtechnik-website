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

    [HttpGet(Name = "GetAllUser")]
    public String Get()
    {
        return "success";
    }

    /*     [HttpPost]
        public IActionResult Create(User user)
        {
            Console.WriteLine("Create new UserName" + user.Name);
            Console.WriteLine("Create new UserID" + user.Id);
            databaseService.createNewUser(user.Name, user.Id);
            return CreatedAtAction(nameof(Create), new { id = user.Name }, user);
        } */
}