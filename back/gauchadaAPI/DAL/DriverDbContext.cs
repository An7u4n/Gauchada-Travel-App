
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace gauchadaAPI.DataAccess
{
    public class DriverDbContext : DbContext
    {
        public DriverDbContext(DbContextOptions<DriverDbContext> options) : base(options) { }
        public DbSet<Models.Driver> Travels { get; set; }
    }
}
