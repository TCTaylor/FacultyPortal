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
    public class FacultyCoursesController : ControllerBase
    {
        private readonly FacultyPortalContext _context;
        private readonly IMapper _mapper;

        public FacultyCoursesController(FacultyPortalContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/FacultyCourses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FacultyCoursesDto>>> GetFacultyCourse()
        {
            var facultyCourses = await _context.FacultyCourses
                .ProjectTo<FacultyCoursesDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return Ok(facultyCourses);
        }

        //// GET: api/FacultyCourses/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<FacultyCoursesDto>> GetFacultyCourse(int id)
        //{
        //    var facultyCourses = await _context.FacultyCourses
        //        .Where(c => c.Id == id)
        //        .ProjectTo<FacultyCoursesDto>(_mapper.ConfigurationProvider)
        //        .ToListAsync();

        //    if (!facultyCourses.Any()) return NotFound();

        //    return Ok(facultyCourses);
        //}

        // GET: api/FacultyCourses/5
        [HttpGet("{instId}")]
        public async Task<ActionResult<FacultyCoursesDto>> GetFacultyCoursesByFaculty(int instId)
        {
            var facultyCourses = await _context.FacultyCourses
                .Include(c => c.Faculty)
                .Where(c => c.Faculty.InstId == instId)
                .ProjectTo<FacultyCoursesDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            if (!facultyCourses.Any()) return NotFound();

            return Ok(facultyCourses);
        }

        //    // PUT: api/FacultyCourses/5
        //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //    [HttpPut("{id}")]
        //    public async Task<IActionResult> PutFacultyCourse(int id, FacultyCourse facultyCourse)
        //    {
        //        if (id != facultyCourse.Id)
        //        {
        //            return BadRequest();
        //        }

        //        _context.Entry(facultyCourse).State = EntityState.Modified;

        //        try
        //        {
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!FacultyCourseExists(id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }

        //        return NoContent();
        //    }

        //    // POST: api/FacultyCourses
        //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //    [HttpPost]
        //    public async Task<ActionResult<FacultyCourse>> PostFacultyCourse(FacultyCourse facultyCourse)
        //    {
        //        _context.FacultyCourses.Add(facultyCourse);
        //        await _context.SaveChangesAsync();

        //        return CreatedAtAction("GetFacultyCourse", new { id = facultyCourse.Id }, facultyCourse);
        //    }

        //    // DELETE: api/FacultyCourses/5
        //    [HttpDelete("{id}")]
        //    public async Task<IActionResult> DeleteFacultyCourse(int id)
        //    {
        //        var facultyCourse = await _context.FacultyCourses.FindAsync(id);
        //        if (facultyCourse == null)
        //        {
        //            return NotFound();
        //        }

        //        _context.FacultyCourses.Remove(facultyCourse);
        //        await _context.SaveChangesAsync();

        //        return NoContent();
        //    }

        //    private bool FacultyCourseExists(int id)
        //    {
        //        return _context.FacultyCourses.Any(e => e.Id == id);
        //    }
    }
}
