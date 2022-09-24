using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using facultyportal_backend.Data;
using facultyportal_backend.Models;

namespace facultyportal_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacultyCoursesController : ControllerBase
    {
        private readonly FacultyPortalDbContext _context;

        public FacultyCoursesController(FacultyPortalDbContext context)
        {
            _context = context;
        }

        // GET: api/FacultyCourses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FacultyCourse>>> GetFacultyCourse()
        {
            return await _context.FacultyCourse.ToListAsync();
        }

        // GET: api/FacultyCourses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FacultyCourse>> GetFacultyCourse(int id)
        {
            var facultyCourse = await _context.FacultyCourse.FindAsync(id);

            if (facultyCourse == null)
            {
                return NotFound();
            }

            return facultyCourse;
        }

        // PUT: api/FacultyCourses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFacultyCourse(int id, FacultyCourse facultyCourse)
        {
            if (id != facultyCourse.Id)
            {
                return BadRequest();
            }

            _context.Entry(facultyCourse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FacultyCourseExists(id))
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

        // POST: api/FacultyCourses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FacultyCourse>> PostFacultyCourse(FacultyCourse facultyCourse)
        {
            _context.FacultyCourse.Add(facultyCourse);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFacultyCourse", new { id = facultyCourse.Id }, facultyCourse);
        }

        // DELETE: api/FacultyCourses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFacultyCourse(int id)
        {
            var facultyCourse = await _context.FacultyCourse.FindAsync(id);
            if (facultyCourse == null)
            {
                return NotFound();
            }

            _context.FacultyCourse.Remove(facultyCourse);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FacultyCourseExists(int id)
        {
            return _context.FacultyCourse.Any(e => e.Id == id);
        }
    }
}
