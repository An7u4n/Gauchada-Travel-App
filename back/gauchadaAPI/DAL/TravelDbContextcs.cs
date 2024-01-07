
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace gauchadaAPI.DataAccess
{
    public class TravelDbContextcs : DbContext
    {
        public TravelDbContextcs(DbContextOptions<TravelDbContextcs> options) : base(options) { }
        public DbSet<Models.Travel> Travels { get; set; }
    }
}
