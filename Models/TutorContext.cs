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
        public DbSet<EstudianteItem> EstudianteItems { get; set; }
        public DbSet<Evaluador> EvaluadorItems { get; set; }
        public DbSet<Facultad> FacultadItems { get; set; }
        public DbSet<Programa> ProgramaItems { get; set; }
        public DbSet<Convocatoria> ConvocatoriaItems { get; set; }
        public DbSet<Grupo> GrupoItems { get; set; }
        public DbSet<Administrador> AdministradorItems { get; set; }
    }
}