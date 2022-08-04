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

    [HttpGet]
    public List<News> get(int limit, int offset)
    {
        return newsService.getNews(limit, offset);
    }

    [HttpPost]
    public Object createNews(NewNews news)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            newsService.createNews(news);
            return new { staus = true };
        }
        else
            return new { staus = false };
    }


}