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
        public async Task<ActionResult<IEnumerable<FacultyCoursesDto>>> GetFacultyCourses()
        {
            var facultyCourses = await _context.FacultyCourses
                .ProjectTo<FacultyCoursesDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return Ok(facultyCourses);
        }

        [HttpGet("{instId}")]
        public async Task<ActionResult<FacultyCoursesDto>> GetFacultyCoursesByFaculty(int instId)
        {
            var facultyCourses = await _context.FacultyCourses
                .Where(x => x.Faculty.InstId == instId)
                .ToListAsync();

            if (!facultyCourses.Any()) return NotFound();

            var dtoList = new List<FacultyCoursesDto>();

            for (int i = 0; i < facultyCourses.Count; i++)
            {
                var courses = await _context.Courses
                    .FirstOrDefaultAsync(x => x.Id == facultyCourses[i].CourseId);

                var dto = new FacultyCoursesDto
                {
                    Id = facultyCourses[i].Id,
                    CourseId = courses.Id,
                    CourseSubject = courses.Subject,
                    CourseNumber = courses.Number,
                    CourseTitle = courses.Title,
                    SectionNumber = courses.SectionNumber,
                };

                dtoList.Add(dto);

            }

            return Ok(dtoList);

        }

        // POST: api/FacultyCourses
        [HttpPost]
        public async Task<ActionResult<ProfileImagesDto>> PostProfileImage(FacultyCourse facultyCourse)
        {
            _context.FacultyCourses.Add(facultyCourse);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFacultyCourse", new { id = facultyCourse.Id }, facultyCourse);
        }

        // DELETE: api/FacultyCourses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFacultyCourse(int id)
        {
            var facultyCourse = await _context.FacultyCourses.FindAsync(id);
            if (facultyCourse == null) return NotFound();

            _context.FacultyCourses.Remove(facultyCourse);
            var result = await _context.SaveChangesAsync() > 0;

            if (!result) return StatusCode(500);

            return NoContent();
        }
    }
}
