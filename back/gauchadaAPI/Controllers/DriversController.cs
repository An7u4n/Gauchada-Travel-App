using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using gauchadaAPI.DataAccess;
using gauchadaAPI.Models;

namespace gauchadaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriversController : ControllerBase
    {
        private readonly DriverDbContext _context;

        public DriversController(DriverDbContext context)
        {
            _context = context;
        }

        // GET: api/Drivers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Driver>>> GetTravels()
        {
          if (_context.Travels == null)
          {
              return NotFound();
          }
            return await _context.Travels.ToListAsync();
        }

        // GET: api/Drivers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Driver>> GetDriver(int id)
        {
          if (_context.Travels == null)
          {
              return NotFound();
          }
            var driver = await _context.Travels.FindAsync(id);

            if (driver == null)
            {
                return NotFound();
            }

            return driver;
        }

        // PUT: api/Drivers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDriver(int id, Driver driver)
        {
            if (id != driver.Id)
            {
                return BadRequest();
            }

            _context.Entry(driver).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DriverExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Drivers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Driver>> PostDriver(Driver driver)
        {
          if (_context.Travels == null)
          {
              return Problem("Entity set 'DriverDbContext.Travels'  is null.");
          }
            _context.Travels.Add(driver);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDriver", new { id = driver.Id }, driver);
        }

        // DELETE: api/Drivers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDriver(int id)
        {
            if (_context.Travels == null)
            {
                return NotFound();
            }
            var driver = await _context.Travels.FindAsync(id);
            if (driver == null)
            {
                return NotFound();
            }

            _context.Travels.Remove(driver);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DriverExists(int id)
        {
            return (_context.Travels?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
