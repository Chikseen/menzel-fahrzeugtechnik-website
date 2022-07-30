using Microsoft.AspNetCore.Mvc;
using dotenv.net;

[ApiController]
[Route("Images")]
public class ImagesController : ControllerBase
{
    private UserService userService;
    private String hostingEnv;

    public ImagesController()
    {
        DotEnv.Load();
        userService = new UserService();
        hostingEnv = Environment.GetEnvironmentVariable("FILE_PATH");
    }

    [HttpPost]
    public String Upload(IFormFile upload)
    {
        if (!Directory.Exists(hostingEnv))
            Directory.CreateDirectory(hostingEnv);

        var fileName = upload.FileName;
        var filePath = Path.Combine(hostingEnv, fileName);
        using (FileStream fs = System.IO.File.Create(filePath))
        {
            upload.CopyTo(fs);
        }
        return "View()";
    }

    [HttpGet]
    public IActionResult Get(String path)
    {
        var image = System.IO.File.OpenRead(Path.Combine(hostingEnv, path));
        return File(image, "image/jpeg");
    }
}