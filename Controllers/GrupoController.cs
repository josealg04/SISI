using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TutorSharpHTTP.Models;
using System.Data;
using System;

namespace TutorSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class GrupoController : ControllerBase
    {
        private readonly TutorContext _context;
        public GrupoController(TutorContext context)
        {
            _context = context;
            if (_context.GrupoItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.GrupoItems.Add(new Grupo{ Nombre = "Grupo de óptica e informática", LineaInvestigacion = "Informática" });
                _context.GrupoItems.Add(new Grupo{ Nombre = "Grupo de energías alternativas y biomasa", LineaInvestigacion = "Energías" });
                _context.GrupoItems.Add(new Grupo{ Nombre = "Aitice", LineaInvestigacion = "Matemática" });
                _context.GrupoItems.Add(new Grupo{ Nombre = "Grupo interdisciplinario de investigación en evaluación", LineaInvestigacion = "Administración" });
                _context.GrupoItems.Add(new Grupo{ Nombre = "Grupo de espectroscopia óptica y laser", LineaInvestigacion = "Laboratorio" });
                _context.GrupoItems.Add(new Grupo{ Nombre = "Guatapurí (grupo de investigación y estudios socioculturales)", LineaInvestigacion = "Sociales" });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

        // GET: api/Tutor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Grupo>>> GetGrupoItems()
        {
            return await _context.GrupoItems.ToListAsync();
        }

        // GET: api/Tutor/5
        [HttpGet("{idGrupo}")]
        public async Task<ActionResult<Grupo>> GetGrupoItem(int idGrupo)
        {
            var grupoItem = await _context.GrupoItems.FindAsync(idGrupo);
            if (grupoItem == null)
            {
                return NotFound();
            }
            return grupoItem;
        }

        // POST: api/Tutor
        [HttpPost]
        public async Task<ActionResult<Grupo>> PostGrupoItem(Grupo item)
        {
            _context.GrupoItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetGrupoItem), new { idGrupo = item.IdGrupo }, item);
        }

        // PUT: api/Tutor/5
        [HttpPut("{idGrupo}")]
        public async Task<IActionResult> Put(long id, Grupo item)
        {
            if (id != item.IdGrupo)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{idGrupo}")]
        public async Task<IActionResult> DeleteGrupoItem(int idGrupo)
        {
            var grupoItem = await
            _context.GrupoItems.FindAsync(idGrupo);
            if (grupoItem == null)
            {
                return NotFound();
            }

            _context.GrupoItems.Remove(grupoItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}