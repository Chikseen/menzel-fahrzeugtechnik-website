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
        hostingEnv = Environment.GetEnvironmentVariable("FILE_PATH");
        path = Path.Combine(hostingEnv, "Files");
    }

    /*     [HttpPost]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {

            long size = files.Sum(f => f.Length);
            Console.WriteLine("size");
            Console.WriteLine(size);

            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);
            // full path to file in temp location

            foreach (var formFile in files)
            {
                Console.WriteLine(formFile.Name);
                if (formFile.Length > 0)
                {
                    Console.WriteLine(formFile.Name);
                    string fileName = Path.Combine(path, formFile.Name) + ".png";
                    using (FileStream fs = System.IO.File.Create(fileName))
                    {
                        formFile.CopyTo(fs);
                    }
                }
            }
            return Ok(new { count = files.Count, size, path });
        } */
    [HttpPost]
    public async Task<String> Post(IFormFile file)
    {



        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);
        // full path to file in temp location

        Console.WriteLine(file.Name);
        if (file.Length > 0)
        {
            Console.WriteLine(file.Name);
            string fileName = Path.Combine(path, file.Name) + ".png";
            using (FileStream fs = System.IO.File.Create(fileName))
            {
                file.CopyTo(fs);
            }

        }
        return "Oknew count = file.Count, path ";
    }

    [HttpGet]
    public IActionResult Get(String id)
    {
        var image = System.IO.File.OpenRead(Path.Combine(path, id));
        return File(image, "image/jpeg");
    }
}