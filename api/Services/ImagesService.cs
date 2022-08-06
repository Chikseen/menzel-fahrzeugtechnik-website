public class ImagesService
{
    public List<String> uploadImage(List<IFormFile> files, String path)
    {
        List<String> addedImages = new List<string>();
        long size = files.Sum(f => f.Length);
        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);

        foreach (IFormFile upload in files)
        {
            DateTime localDate = DateTime.Now;
            String fileName = upload.FileName;
            String filePath = Path.Combine(path, fileName);
            using (FileStream fs = System.IO.File.Create(filePath))
            {
                upload.CopyTo(fs);
                String sql = $"INSERT INTO Images(titel) VALUES ('{fileName}');";
                addedImages.Add(fileName);
                List<List<String>> data = DatabaseService.query(sql);
            }
        }
        return addedImages;
    }

    public List<String> getAllImages(int limit, int offset)
    {
        String sql = $"SELECT titel FROM Images ORDER BY created DESC LIMIT {limit} OFFSET {offset};";
        List<List<String>> data = DatabaseService.query(sql);
        List<String> paths = new List<String>();
        Console.WriteLine(data.Count);


        for (int i = 0; i < data.Count; i++)
        {
            paths.Add(data[i][0]);
        }

        return paths;
    }

    public String deleteImage(String name, String path)
    {
        System.IO.File.Delete(Path.Combine(path, name!));
        String sql = $"DELETE FROM Images WHERE titel = '{name!}'";
        List<List<String>> data = DatabaseService.query(sql);
        return "hi";
    }
}