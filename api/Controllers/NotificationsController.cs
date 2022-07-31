using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Net.Http;

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
        return notificationsService.getActiveNotifications(); ;
    }

    [HttpGet("All")]
    public List<Notification> getAllNotifications()
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            return notificationsService.getAllNotifications(); ;
        }
        return new List<Notification>();
    }

    [HttpPost]
    public Object setNotifications(NewNotification newNotification)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            notificationsService.setNewNotification(newNotification);
            return new { status = true };
        }
        return new { status = false };
    }

    [HttpPut]
    public Object editNotifications(Notification notificationId)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            notificationsService.editNotifications(notificationId);
            return new { status = true };
        }
        return new { status = false };
    }

    [HttpDelete]
    public Object deleteNotifications(NotificationId notificationId)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            notificationsService.deleteNotification(notificationId);
            return new { status = true };
        }
        return new { status = false };
    }
}