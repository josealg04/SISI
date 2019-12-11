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

    public class AdministradorController : ControllerBase
    {
        private readonly TutorContext _context;
        public AdministradorController(TutorContext context)
        {
            _context = context;
            if (_context.AdministradorItems.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.AdministradorItems.Add(new Administrador
                {
                    Username = "admin",
                    Password = "admin"
                });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

        // GET: api/Tutor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Administrador>>> GetAdministradorItems()
        {
            return await _context.AdministradorItems.ToListAsync();
        }

        // GET: api/Tutor/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Administrador>> GetAdministradorItem(int id)
        {
            var admItem = await _context.AdministradorItems.FindAsync(id);
            if (admItem == null)
            {
                return NotFound();
            }
            return admItem;
        }

        // POST: api/Tutor
        [HttpPost]
        public async Task<ActionResult<Administrador>> PostAdministradorItem(Administrador item)
        {
            _context.AdministradorItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAdministradorItem), new { id = item.Id }, item);
        }

        // PUT: api/Tutor/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Administrador item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdministradorItem(int id)
        {
            var admItem = await
            _context.AdministradorItems.FindAsync(id);
            if (admItem == null)
            {
                return NotFound();
            }

            _context.AdministradorItems.Remove(admItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        //LOGIN
        [HttpGet("user={user}")]
        public async Task<ActionResult<Administrador>> GetAdministradorByUser(string user)
        {
            //prueba linq
            var adm = await _context.AdministradorItems.FirstOrDefaultAsync(i => i.Username == user);
            if (adm == null)
            {
                return NotFound();
            }
            return adm;
        }
    }
}