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
        userService.countUser(HttpContext.Request.Headers["User-Agent"], "AllUser");
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
            return Ok();
        }
        return Unauthorized();
    }
    [HttpDelete]
    public Object DeleteUser(ValidateUser value)
    {
        if (userService.checkUserExits(value.value))
        {
            userService.deleteUser(value.value);
        }
        return Unauthorized();
    }

    [HttpGet("Count/{start?}/{end?}")]
    public ActionResult<Object> UserCount(String start = "-1", String end = "-1")
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            return userService.getCount(start, end);
        }
        return Unauthorized();
    }
}