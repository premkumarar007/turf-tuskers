using Microsoft.EntityFrameworkCore;

namespace turf_tuskers_backend.Data
{
    public class TurfTuskersContext : DbContext
    {
        public TurfTuskersContext(DbContextOptions<TurfTuskersContext> options) : base(options) { }

        public DbSet<Match> Matches { get; set; }
        public DbSet<Player> Players { get; set; }
    }
}
