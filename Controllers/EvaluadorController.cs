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
    public class EvaluadorController : ControllerBase
    {
        private readonly TutorContext _context;
        public EvaluadorController(TutorContext context)
        {
            _context = context;
            if (_context.EvaluadorItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.EvaluadorItems.Add(new Evaluador
                {
                    TipoDocumento = "CC",
                    Cedula = "1003241944",
                    PrimerNombre = "Leidy",
                    SegundoNombre = "Laura",
                    PrimerApellido = "Carballo",
                    SegundoApellido = "Suarez",
                    Genero = "Femenino",
                    FechaNacimiento = Convert.ToDateTime("10/12/1999"),
                    Direccion = "Manzana A Casa 10 Urb. Luis Carlos Galan",
                    Telefono = "3046767916",
                    Email_Personal = "leidy.carballo10@gmail.com",
                    Username = "leidy",
                    Password = "12345"
                });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

        // GET: api/Tutor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Evaluador>>> GetEvaluadorItems()
        {
            return await _context.EvaluadorItems.ToListAsync();
        }

        // GET: api/Tutor/5
        [HttpGet("{cedula}")]
        public async Task<ActionResult<Evaluador>> GetEvaluadorItem(string cedula)
        {
            var evaluador = await _context.EvaluadorItems.FindAsync(cedula);
            if (evaluador == null)
            {
                return NotFound();
            }
            return evaluador;
        }

        // POST: api/Tutor
        [HttpPost]
        public async Task<ActionResult<Evaluador>> PostEvaluadorItem(Evaluador item)
        {
            _context.EvaluadorItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEvaluadorItem), new { cedula = item.Cedula }, item);
        }

        // PUT: api/Tutor/5
        [HttpPut("{cedula}")]
        public async Task<IActionResult> Put(string cedula, Evaluador item)
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
        public async Task<IActionResult> DeleteEvaluadorItem(string cedula)
        {
            var evaluador = await
            _context.EvaluadorItems.FindAsync(cedula);
            if (evaluador == null)
            {
                return NotFound();
            }

            _context.EvaluadorItems.Remove(evaluador);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        //LOGIN
        [HttpGet("user={user}")]
        public async Task<ActionResult<Evaluador>> GetEvaluadorByUser(string user)
        {
            //prueba linq
            var evaluador = await _context.EvaluadorItems.FirstOrDefaultAsync(i => i.Username == user);
            if (evaluador == null)
            {
                return NotFound();
            }
            return evaluador;
        }
    }
}