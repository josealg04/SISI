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

    public class EstudianteController : ControllerBase
    {
        private readonly TutorContext _context;
        public EstudianteController(TutorContext context)
        {
            _context = context;
            if (_context.EstudianteItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.EstudianteItems.Add(new EstudianteItem { 
                    TipoDocumento = "CC", 
                    Cedula = "1001088801", 
                    PrimerNombre = "Diego", 
                    SegundoNombre = "Alejandro", 
                    PrimerApellido = "Martinez", 
                    SegundoApellido = "Barbosa", 
                    Genero = "Masculino", 
                    FechaNacimiento = Convert.ToDateTime("29/02/2000"), 
                    Direccion = "Carrera 30A #30-88", 
                    Telefono = "3233508410", 
                    Email_Personal = "jose-angel200090@hotmail.com", 
                    FechaIngreso = Convert.ToDateTime("29/02/2000"), 
                    Facultad = "Facultad de Ingenierías y Tecnologías",
                    Programa = "Ingeniería de Sistemas", 
                    Semestre = "Sexto Semestre",
                    Email_Institucional = "jangellopez@unicesar.edu.co", 
                    Cvlac = "www.google.com" 
                });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

        // GET: api/Tutor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EstudianteItem>>> GetEstudianteItems()
        {
            return await _context.EstudianteItems.ToListAsync();
        }

        // GET: api/Tutor/5
        [HttpGet("{cedula}")]
        public async Task<ActionResult<EstudianteItem>> GetEstudianteItem(string cedula)
        {
            var estudianteItem = await _context.EstudianteItems.FindAsync(cedula);
            if (estudianteItem == null)
            {
                return NotFound();
            }
            return estudianteItem;
        }

        // POST: api/Tutor
        [HttpPost]
        public async Task<ActionResult<EstudianteItem>> PostEstudianteItem(EstudianteItem item)
        {

             if (!ModelState.IsValid)
             {
                BadRequest(ModelState);

             }    

            _context.EstudianteItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEstudianteItem), new { cedula = item.Cedula }, item);
        }

        // PUT: api/Tutor/5
        [HttpPut("{cedula}")]
        public async Task<IActionResult> Put(string cedula, EstudianteItem item)
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
        public async Task<IActionResult> DeleteEstudianteItem(string cedula)
        {
            var EstudianteItem = await
            _context.EstudianteItems.FindAsync(cedula);
            if (EstudianteItem == null)
            {
                return NotFound();
            }

            _context.EstudianteItems.Remove(EstudianteItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}