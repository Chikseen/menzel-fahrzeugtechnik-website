using System.Net.Http;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("Openinghours")]
public class OpeninghoursController : ControllerBase
{
    private OpeninghoursService openinghoursService;

    private UserService userService;

    public OpeninghoursController()
    {
        openinghoursService = new OpeninghoursService();
        userService = new UserService();
    }

    [HttpGet]
    public List<Openinghours> getDays()
    {
        return openinghoursService.getDays();
    }

    [HttpGet("All")]
    public List<Openinghours> getAllDays()
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            return openinghoursService.getAllDays();
        }
        else
            return new List<Openinghours>();
    }

    [HttpGet("Weekdays")]
    public OpeninghoursWeekdays[] getWeekdays()
    {
        return openinghoursService.getWeekdays();
    }

    [HttpPost]
    public Object createNewDay(NewOpeninghours newOpeninghoursService)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            openinghoursService.createNewDay(newOpeninghoursService);
            return new { status = true };
        }
        else
            return new { status = false };
    }

    [HttpPut]
    public Object editOpeninghours(EditOpeninghours openinghours)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            openinghoursService.editOpeninghours(openinghours);
            return new { status = true };
        }
        return new { status = false };
    }

    [HttpDelete]
    public Object deleteOpeninghours(OpeninghoursId openinghours)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            openinghoursService.deleteOpeninghours(openinghours);
            return new { status = true };
        }
        return new { status = false };
    }

}
