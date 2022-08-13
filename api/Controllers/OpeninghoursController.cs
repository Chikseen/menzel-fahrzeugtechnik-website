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
        userService.countUser(HttpContext.Request.Headers["User-Agent"], "OpeningHours");
        return openinghoursService.getDays();
    }

    [HttpGet("All")]
    public ActionResult<List<Openinghours>> getAllDays()
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            return openinghoursService.getAllDays();
        }
        else
            return Unauthorized();
    }

    [HttpGet("Weekdays")]
    public OpeninghoursWeekdays[] getWeekdays()
    {
        return openinghoursService.getWeekdays();
    }

    [HttpPost]
    public ActionResult createNewDay(NewOpeninghours newOpeninghoursService)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            openinghoursService.createNewDay(newOpeninghoursService);
            return Ok();
        }
        else
            return Unauthorized();
    }

    [HttpPut]
    public ActionResult editOpeninghours(EditOpeninghours openinghours)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            openinghoursService.editOpeninghours(openinghours);
            return Ok();
        }
        return Unauthorized();
    }

    [HttpDelete]
    public ActionResult deleteOpeninghours(OpeninghoursId openinghours)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            openinghoursService.deleteOpeninghours(openinghours);
            return Ok();
        }
        return Unauthorized();
    }

}
