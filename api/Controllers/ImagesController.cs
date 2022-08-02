using Microsoft.AspNetCore.Mvc;
using dotenv.net;

[ApiController]
[Route("Images")]
public class ImagesController : ControllerBase
{
    private UserService userService;
    private ImagesService imagesService;
    private String hostingEnv;
    private String path;

    public ImagesController()
    {
        imagesService = new ImagesService();
        DotEnv.Load();
        userService = new UserService();
        hostingEnv = Environment.GetEnvironmentVariable("FILE_PATH")!;
        path = Path.Combine(hostingEnv, "Files");
    }

    [HttpGet]
    public IActionResult Get(String name)
    {
        var image = System.IO.File.OpenRead(Path.Combine(path, name));
        return File(image, "image/jpeg");
    }

    [HttpGet("All")]
    public List<String> getAllImages(int offset, int limit)
    {
        return imagesService.getAllImages(offset, limit);
    }

    [HttpPost]
    public Object uploadImage(List<IFormFile> files)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            imagesService.uploadImage(files, path);
            return new { staus = true };
        }
        else
            return new { staus = false };
    }


    [HttpDelete]
    public Object deleteImage(ImageId name)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            imagesService.deleteImage(name.id, path);

            return new { staus = true };
        }
        else
            return new { staus = false };
    }
}