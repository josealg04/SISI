using Microsoft.EntityFrameworkCore;

namespace TutorSharpHTTP.Models
{
    public class TutorContext : DbContext
    {
        public TutorContext(DbContextOptions<TutorContext> options) :
        base(options)
        {
        }
        public DbSet<TutorItem> TutorItems { get; set; }
    }
}