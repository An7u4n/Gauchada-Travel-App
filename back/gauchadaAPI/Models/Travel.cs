using System.ComponentModel.DataAnnotations;

namespace gauchadaAPI.Models
{
    public class Travel
    {
        [Required] [Key] public int Id { get; set; }
        [Required] public int DriverId { get; set; }
        [Required] public string OriginCity { get; set; } = string.Empty;
        [Required] public string EndCity { get; set; } = string.Empty;
        [Required] public int Price { get; set; }
        [Required] public DateTime StartTime { get; set; }
        [Required] public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
