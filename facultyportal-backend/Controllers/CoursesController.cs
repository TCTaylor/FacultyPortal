using AutoMapper;
using AutoMapper.QueryableExtensions;
using facultyportal_backend.Application.DTOs;
using facultyportal_backend.Data;
using facultyportal_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace facultyportal_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly FacultyPortalContext _context;
        private readonly IMapper _mapper;

        public CoursesController(FacultyPortalContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CoursesDto>>> GetCourses()
        {
            var courses = await _context.Courses
                .ProjectTo<CoursesDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return Ok(courses);
        }

        // GET: api/Courses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CoursesDto>> GetCourse(int id)
        {
            var course = await _context.Courses
                .FirstOrDefaultAsync(c => c.Id == id);

            if (course == null) return NotFound();

            var dto = new CoursesDto();

            _mapper.Map(course, dto);

            return Ok(dto);

        }

        //// PUT: api/Courses/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutFaculty(int id, [FromBody] CoursesDto dto)
        //{
        //    var entry = await _context.Courses.FindAsync(id);

        //    if (entry == null) return BadRequest();

        //    _mapper.Map(dto, entry);

        //    var result = await _context.SaveChangesAsync() > 0;

        //    if (!result) return StatusCode(500);

        //    return NoContent();
        //}

        //// POST: api/Courses
        //[HttpPost]
        //public async Task<ActionResult<FacultyDto>> PostFaculty(Course course)
        //{
        //    _context.Courses.Add(course);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetFaculty", new { id = course.Id }, course);
        //}

        //// DELETE: api/Courses/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteFaculty(int id)
        //{
        //    var course = await _context.Courses.FindAsync(id);
        //    if (course == null) return NotFound();

        //    _context.Courses.Remove(course);
        //    var result = await _context.SaveChangesAsync() > 0;

        //    if (!result) return StatusCode(500);

        //    return NoContent();
        //}
    }
}
