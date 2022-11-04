using AutoMapper;
using AutoMapper.QueryableExtensions;
using facultyportal_backend.Application.DTOs;
using facultyportal_backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace facultyportal_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacultyController : ControllerBase
    {
        private readonly FacultyPortalContext _context;
        private readonly IMapper _mapper;

        public FacultyController(FacultyPortalContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Faculty
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FacultyDto>>> GetFaculty()
        {
            var faculty = await _context.Courses
                .ProjectTo<FacultyDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return Ok(faculty);
        }

        // GET: api/Faculty/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FacultyDto>> GetFaculty(int id)
        {
            var faculty = await _context.Faculty
                .Where(c => c.Id == id)
                .ProjectTo<FacultyDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            if (!faculty.Any()) return NotFound();

            return Ok(faculty);
        }

        //// PUT: api/Faculty/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutFaculty(int id, FacultyDto faculty)
        //{
        //    if (id != faculty.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(faculty).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!FacultyExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Faculty
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<FacultyDto>> PostFaculty(FacultyDto faculty)
        //{
        //    _context.Faculty.Add(faculty);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetFaculty", new { id = faculty.Id }, faculty);
        //}

        //// DELETE: api/Faculty/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteFaculty(int id)
        //{
        //    var faculty = await _context.Faculty.FindAsync(id);
        //    if (faculty == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Faculty.Remove(faculty);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool FacultyExists(int id)
        //{
        //    return _context.Faculty.Any(e => e.Id == id);
        //}
    }
}
