using System.Net.Http;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

/* 
WEEKDAY PROBLEM SOLUTION
Every entry should have the prop "isActive"
and a prop with "allowWeekdayControll"
with extra table wich should be controled
-> only the first active entry should be able to show the days (No matter if complete or not) 
-> if one entry has mon - wed and other hs don - fri the one with lower pos has higher prio
-> is no data mark as closed
 */

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
    public Object editOpeninghours(Openinghours openinghours)
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
