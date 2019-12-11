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

    public class ConvocatoriaController : ControllerBase
    {
        private readonly TutorContext _context;
        public ConvocatoriaController(TutorContext context)
        {
            _context = context;
            if (_context.ConvocatoriaItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.ConvocatoriaItems.Add(new Convocatoria
                {
                    FechaInicio = Convert.ToDateTime("11/12/2019"),
                    FechaFinal = Convert.ToDateTime("20/12/2019")
                });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

        // GET: api/Tutor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Convocatoria>>> GetConvocatoriaItems()
        {
            return await _context.ConvocatoriaItems.ToListAsync();
        }

        // GET: api/Tutor/5
        [HttpGet("{idConvocatoria}")]
        public async Task<ActionResult<Convocatoria>> GetConvocatoriaItem(int idConvocatoria)
        {
            var convocatoriaItem = await _context.ConvocatoriaItems.FindAsync(idConvocatoria);
            if (convocatoriaItem == null)
            {
                return NotFound();
            }
            return convocatoriaItem;
        }

        // POST: api/Tutor
        [HttpPost]
        public async Task<ActionResult<Convocatoria>> PostConvocatoriaItem(Convocatoria item)
        {
            _context.ConvocatoriaItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetConvocatoriaItem), new { idConvocatoria = item.IdConvocatoria }, item);
        }

        // PUT: api/Tutor/5
        [HttpPut("{idConvocatoria}")]
        public async Task<IActionResult> Put(long id, Convocatoria item)
        {
            if (id != item.IdConvocatoria)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{idConvocatoria}")]
        public async Task<IActionResult> DeleteConvocatoriaItem(int idConvocatoria)
        {
            var convocatoriaItem = await
            _context.ConvocatoriaItems.FindAsync(idConvocatoria);
            if (convocatoriaItem == null)
            {
                return NotFound();
            }

            _context.ConvocatoriaItems.Remove(convocatoriaItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}