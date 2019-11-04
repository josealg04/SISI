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

    public class TutorController : ControllerBase
    {
        private readonly TutorContext _context;
        public TutorController(TutorContext context)
        {
            _context = context;
            if (_context.TutorItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.TutorItems.Add(new TutorItem { 
                    TipoDocumento = "CC", 
                    Cedula = 1003242337, 
                    PrimerNombre = "Jose", 
                    SegundoNombre = "Angel", 
                    PrimerApellido = "Lopez", 
                    SegundoApellido = "Gomez", 
                    Genero = "Masculino", 
                    FechaNacimiento = Convert.ToDateTime("04/08/2000"), 
                    Direccion = "Manzana 5 Casa 13 Alamos 2", 
                    Telefono = 3013222267, 
                    Email_Personal = "ggg", 
                    FechaIngreso = Convert.ToDateTime("04/08/2000"), 
                    Programa = "Ingeniería de Sistemas", 
                    Email_Institucional = "hhh", 
                    Cvlac = "jjj" 
                });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

        // GET: api/Tutor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TutorItem>>> GetTutorItems()
        {
            return await _context.TutorItems.ToListAsync();
        }

        // GET: api/Tutor/5
        [HttpGet("{cedula}")]
        public async Task<ActionResult<TutorItem>> GetTutorItem(uint cedula)
        {
            var tutorItem = await _context.TutorItems.FindAsync(cedula);
            if (tutorItem == null)
            {
                return NotFound();
            }
            return tutorItem;
        }

        // POST: api/Tutor
        [HttpPost]
        public async Task<ActionResult<TutorItem>> PostTutorItem(TutorItem item)
        {
            _context.TutorItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTutorItem), new { cedula = item.Cedula }, item);
        }

        // PUT: api/Tutor/5
        [HttpPut("{cedula}")]
        public async Task<IActionResult> Put(uint cedula, TutorItem item)
        {
            if (cedula != item.Cedula)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{cedula}")]
        public async Task<IActionResult> DeleteTutorItem(uint cedula)
        {
            var TutorItem = await
            _context.TutorItems.FindAsync(cedula);
            if (TutorItem == null)
            {
                return NotFound();
            }

            _context.TutorItems.Remove(TutorItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}