using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Net.Http;

[ApiController]
[Route("User")]
public class UserController : ControllerBase
{
    private UserService userService;
    public UserController()
    {
        userService = new UserService();
    }

    [HttpGet]
    public Object CheckKey()
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
            return new { status = true };
        else
            return new { status = false };
    }

    [HttpGet("All")]
    public List<AllUser> GetAllUserNames()
    {
        List<AllUser> users = new List<AllUser>(userService.getAllUserNames(HttpContext.Request.Cookies["sessionId"]!));
        return users;
    }

    [HttpPost]
    public Object CreateUser(NewUser newuser)
    {
        Object data = userService.createNewUser(newuser.name);
        return data;
    }

    [HttpPost("Validate")]
    public Object ValidateUser(ValidateUser value)
    {
        if (userService.checkUserExits(value.value))
        {
            HttpContext.Response.Cookies.Append("sessionId", value.value);
        }
        return new { st = "st" };
    }
    [HttpDelete]
    public Object DeleteUser(ValidateUser value)
    {
        if (userService.checkUserExits(value.value))
        {
            userService.deleteUser(value.value);
        }
        return new { st = "st" };
    }
}