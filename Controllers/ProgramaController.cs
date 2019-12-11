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

    public class ProgramaController : ControllerBase
    {
        private readonly TutorContext _context;
        public ProgramaController(TutorContext context)
        {
            _context = context;
            if (_context.ProgramaItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.ProgramaItems.Add(new Programa { Nombre = "Enfermería", IdFacultad = 1 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Instrumentación Quirúrgica", IdFacultad = 1 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Microbiología", IdFacultad = 1 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Licenciatura en Matemáticas", IdFacultad = 2 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Licenciatura en Ciencias Naturales y Educación Ambiental", IdFacultad = 2 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Licenciatura en Educación Física, Recreación y Deporte", IdFacultad = 2 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Licenciatura en Español e Inglés", IdFacultad = 2 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Administración de Empresas", IdFacultad = 3 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Economía", IdFacultad = 3 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Contaduría Pública", IdFacultad = 3 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Comercio Internacional", IdFacultad = 3 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Licenciatura en Arte", IdFacultad = 4 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Música", IdFacultad = 4 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Ingeniería de Sistemas", IdFacultad = 5 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Ingeniería Electrónica", IdFacultad = 5 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Ingeniería Agroindustrial", IdFacultad = 5 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Ingeniería Ambiental y Sanitaria", IdFacultad = 5 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Derecho", IdFacultad = 6 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Psicología", IdFacultad = 6 });
                _context.ProgramaItems.Add(new Programa { Nombre = "Sociología", IdFacultad = 6 });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

        // GET: api/Tutor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Programa>>> GetProgramaItems()
        {
            return await _context.ProgramaItems.ToListAsync();
        }

        // GET: api/Tutor/5
        [HttpGet("{idPrograma}")]
        public async Task<ActionResult<Programa>> GetProgramaItem(int idPrograma)
        {
            var programaItem = await _context.ProgramaItems.FindAsync(idPrograma);
            if (programaItem == null)
            {
                return NotFound();
            }
            return programaItem;
        }

        // POST: api/Tutor
        [HttpPost]
        public async Task<ActionResult<Programa>> PostProgramaItem(Programa item)
        {
            _context.ProgramaItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProgramaItem), new { idPrograma = item.IdPrograma }, item);
        }

        // PUT: api/Tutor/5
        [HttpPut("{idPrograma}")]
        public async Task<IActionResult> Put(long id, Programa item)
        {
            if (id != item.IdPrograma)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{idPrograma}")]
        public async Task<IActionResult> DeleteProgramaItem(int idPrograma)
        {
            var programaItem = await
            _context.ProgramaItems.FindAsync(idPrograma);
            if (programaItem == null)
            {
                return NotFound();
            }

            _context.ProgramaItems.Remove(programaItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}