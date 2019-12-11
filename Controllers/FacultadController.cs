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

    public class FacultadController : ControllerBase
    {
        private readonly TutorContext _context;
        public FacultadController(TutorContext context)
        {
            _context = context;
            if (_context.FacultadItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.FacultadItems.Add(new Facultad{ Nombre = "Facultad de Ciencias de la Salud" });
                _context.FacultadItems.Add(new Facultad{ Nombre = "Facultad de Ciencias Básicas y Educación" });
                _context.FacultadItems.Add(new Facultad{ Nombre = "Facultad de Ciencias Administrativas Contables y Económicas" });
                _context.FacultadItems.Add(new Facultad{ Nombre = "Facultad de Bellas Artes" });
                _context.FacultadItems.Add(new Facultad{ Nombre = "Facultad de Ingenierías y Tecnologías" });
                _context.FacultadItems.Add(new Facultad{ Nombre = "Facultad de Derecho Ciencias Políticas y Sociales" });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

        // GET: api/Tutor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Facultad>>> GetFacultadItems()
        {
            return await _context.FacultadItems.ToListAsync();
        }

        // GET: api/Tutor/5
        [HttpGet("{idFacultad}")]
        public async Task<ActionResult<Facultad>> GetFacultadItem(int idFacultad)
        {
            var facultadItem = await _context.FacultadItems.FindAsync(idFacultad);
            if (facultadItem == null)
            {
                return NotFound();
            }
            return facultadItem;
        }

        // POST: api/Tutor
        [HttpPost]
        public async Task<ActionResult<Facultad>> PostFacultadItem(Facultad item)
        {
            _context.FacultadItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFacultadItem), new { idFacultad = item.IdFacultad }, item);
        }

        // PUT: api/Tutor/5
        [HttpPut("{idFacultad}")]
        public async Task<IActionResult> Put(long id, Facultad item)
        {
            if (id != item.IdFacultad)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{idFacultad}")]
        public async Task<IActionResult> DeleteFacultadItem(int idFacultad)
        {
            var facultadItem = await
            _context.FacultadItems.FindAsync(idFacultad);
            if (facultadItem == null)
            {
                return NotFound();
            }

            _context.FacultadItems.Remove(facultadItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}