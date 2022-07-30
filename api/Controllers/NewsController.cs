using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("News")]
public class NewsController : ControllerBase
{
    private NewsService newsService;
    private UserService userService;

    public NewsController()
    {
        newsService = new NewsService();
        userService = new UserService();
    }

    [HttpPost]
    public String Upload(IFormFile upload)
    {
        return "View()";
    }

    [HttpGet]
    public String get(IFormFile upload)
    {
        return "View()";
    }
}