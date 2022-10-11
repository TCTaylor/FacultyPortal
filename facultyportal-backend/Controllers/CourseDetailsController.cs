using AutoMapper;
using AutoMapper.QueryableExtensions;
using facultyportal_backend.Data;
using facultyportal_backend.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace facultyportal_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseDetailsController : ControllerBase
    {
        private readonly FacultyPortalContext _context;
        private readonly IMapper _mapper;

        public CourseDetailsController(FacultyPortalContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/CourseDetails
        [HttpGet]
        //public async Task<ActionResult<IEnumerable<CoursesDto>>> GetCourseDetails()
        //{
        //    return await _context.Courses.ToListAsync();
        //}

        // GET: api/CourseDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CoursesDto>> GetCourseDetails(int id)
        {
            var courseDetails = await _context.Courses
                .Include(c => c.Division)
                .Include(c => c.Sections)
                .Where(c => c.Id == id)
                .OrderBy(c => c.Title)
                .ProjectTo<CoursesDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            if (courseDetails == null)
            {
                return NotFound();
            }

            return Ok(courseDetails);

            //var courseDetails = _context.Courses
            //    .Include(c => c.Divisions)
            //    .Include(c => c.Sections)
            //    .Select(c => new CourseDetailsDto()
            //    {
            //        Id = c.Id,
            //        Subject = c.Subject,
            //        CourseNumber = c.CourseNumber,
            //        Title = c.Title,
            //        QualId = c.QualId,
            //        MaxSize = c.MaxSize,
            //        DivisionsDto = c.Divisions.Select(d => new DivisionsDto()
            //        {
            //            Id = c.DivisionId,
            //            DivisionName = d.Name,
            //        })
            //        .ToList(),
            //        SectionsDto = c.Sections.Select(s => new SectionsDto()
            //        {
            //            Id = c.Id,
            //            SectionNumber = s.SectionNumber,
            //        })
            //        .ToList(),
            //    }).ToListAsync();
            //if (courseDetails == null)
            //{
            //    //return NotFound();
            //}
        }

        //// PUT: api/CourseDetails/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutCourseDetail(int id, Course courseDetail)
        //{
        //    if (id != courseDetail.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(courseDetail).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CourseDetailExists(id))
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

        //// POST: api/CourseDetails
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Course>> PostCourseDetail(Course courseDetail)
        //{
        //    _context.Courses.Add(courseDetail);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetCourseDetail", new { id = courseDetail.Id }, courseDetail);
        //}

        //// DELETE: api/CourseDetails/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteCourseDetail(int id)
        //{
        //    var courseDetail = await _context.Courses.FindAsync(id);
        //    if (courseDetail == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Courses.Remove(courseDetail);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool CourseDetailExists(int id)
        //{
        //    return _context.Courses.Any(e => e.Id == id);
        //}
    }
}
