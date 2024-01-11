using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using System.IO;

[Route("api/images")]
public class ImageController : ControllerBase
{
    private readonly IFileProvider _fileProvider;

    public ImageController(IFileProvider fileProvider)
    {
        _fileProvider = fileProvider;
    }

    [HttpPost]
    public IActionResult UploadImage(int driverId, IFormFile image)
    {
        // TODO: Make POST request work

        // Ejemplo simple:
        var fileName = "example.jpg";
        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images", fileName);

        return Ok(new { FileName = fileName, FilePath = filePath });
    }

    [HttpGet("{imageName}")]
    public IActionResult GetImage(string imageName)
    {
        var fileInfo = _fileProvider.GetFileInfo($"Images/{imageName}");
        if (fileInfo.Exists)
        {
            var stream = fileInfo.CreateReadStream();
            return File(stream, "image/jpeg"); // Ajusta el tipo MIME según tus necesidades
        }

        return NotFound();
    }
}