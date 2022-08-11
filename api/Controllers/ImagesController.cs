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
    public ActionResult Get(String name)
    {
        if (!System.IO.File.Exists(Path.Combine(path, name)))
            return Ok(); // dont want to trowh error since this can occur oftne
        var image = System.IO.File.OpenRead(Path.Combine(path, name));
        return File(image, "image/jpeg");
    }

    [HttpGet("All")]
    public List<String> getAllImages(int limit, int offset)
    {
        return imagesService.getAllImages(limit, offset);
    }

    [HttpPost]
    public ActionResult<List<String>> uploadImage(List<IFormFile> files)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            return imagesService.uploadImage(files, path);
        }
        else
            return Unauthorized();
    }


    [HttpDelete]
    public ActionResult deleteImage(ImageId name)
    {
        if (userService.checkUserExits(HttpContext.Request.Cookies["sessionId"]!))
        {
            imagesService.deleteImage(name.id, path);
            return Ok();
        }
        else
            return Unauthorized();
    }
}