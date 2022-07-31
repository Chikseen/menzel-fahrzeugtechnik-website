using Microsoft.AspNetCore.Mvc;
using dotenv.net;

[ApiController]
[Route("Images")]
public class ImagesController : ControllerBase
{
    private UserService userService;
    private String hostingEnv;
    private String path;

    public ImagesController()
    {
        DotEnv.Load();
        userService = new UserService();
        hostingEnv = Environment.GetEnvironmentVariable("FILE_PATH")!;
        path = Path.Combine(hostingEnv, "Files");
    }

    [HttpPost]
    public String Upload(List<IFormFile> files)
    {
        long size = files.Sum(f => f.Length);
        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);

        foreach (var upload in files)
        {
            var fileName = upload.FileName;
            var filePath = Path.Combine(path, fileName);
            using (FileStream fs = System.IO.File.Create(filePath))
            {
                upload.CopyTo(fs);
            }
        }
        return " Ok(new { count = files.Count, size, path })";
    }

    [HttpGet]
    public IActionResult Get(String id)
    {
        var image = System.IO.File.OpenRead(Path.Combine(path, id));
        return File(image, "image/jpeg");
    }
}