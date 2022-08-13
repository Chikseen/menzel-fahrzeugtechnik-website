using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("Notification")]
public class NotificationsController : ControllerBase
{
    private NotificationsService notificationsService;
    private UserService userService;

    public NotificationsController()
    {
        notificationsService = new NotificationsService();
        userService = new UserService();
    }

    [HttpGet]
    public List<Notification> getActiveNotifications()
    {
        userService.countUser(HttpContext.Request.Headers["User-Agent"], "ActiveNotification");
        return notificationsService.getActiveNotifications(); ;
    }

    [HttpGet("All")]
    public ActionResult<List<Notification>> getAllNotifications()
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            return notificationsService.getAllNotifications(); ;
        }
        return Unauthorized();
    }

    [HttpPost]
    public ActionResult<Object> setNotifications(NewNotification newNotification)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            notificationsService.setNewNotification(newNotification);
            return new ActionResult<Object>(Ok());
        }
        return Unauthorized();
    }

    [HttpPut]
    public Object editNotifications(Notification notificationId)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            notificationsService.editNotifications(notificationId);
            return Ok();
        }
        return Unauthorized();
    }

    [HttpDelete]
    public ActionResult deleteNotifications(NotificationId notificationId)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            notificationsService.deleteNotification(notificationId);
            return Ok();
        }
        return Unauthorized();
    }
}