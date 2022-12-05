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
            var faculty = await _context.Faculty.ToListAsync();

            var dtoList = new List<FacultyDto>();

            for (int i = 0; i < faculty.Count; i++)
            {
                var accessor = await _context.Accessors
                    .FirstOrDefaultAsync(x => x.InstId == faculty[i].InstId);

                var qualifications = await _context.FacultyQualifications
                    .Where(x => x.FacultyId == faculty[i].Id)
                    .ProjectTo<FacultyQualificationsDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();

                var dto = new FacultyDto
                {
                    Id = faculty[i].Id,
                    InstId = faculty[i].InstId,
                    FirstName = faculty[i].FirstName,
                    LastName = faculty[i].LastName,
                    MidInit = faculty[i].MidInit,
                    Suffix = faculty[i].Suffix,
                    DivisionId = accessor?.DivisionId,
                    Qualifications = qualifications,
                };

                dtoList.Add(dto);
            }

            return Ok(dtoList);

        }

        // GET: api/Faculty/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FacultyDto>> GetFaculty(int id)
        {
            var faculty = await _context.Faculty.FirstOrDefaultAsync(x => x.Id == id);

            if (faculty == null) return NotFound();

            var dto = new FacultyDto();
            
            var accessor = await _context.Accessors
                .FirstOrDefaultAsync(x => x.InstId == faculty.InstId);

            var qualifications = await _context.FacultyQualifications
                .Where(x => x.FacultyId == faculty.Id)
                .ProjectTo<FacultyQualificationsDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            dto.Id = faculty.Id;
            dto.InstId = faculty.InstId;
            dto.FirstName = faculty.FirstName;
            dto.LastName = faculty.LastName;
            dto.MidInit = faculty.MidInit;
            dto.Suffix = faculty.Suffix;
            dto.DivisionId = accessor?.DivisionId;
            dto.Qualifications = qualifications;

            return Ok(dto);
        }

        // PUT: api/Faculty/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFaculty(int id, [FromBody] FacultyDto dto)
        {
            var entry = await _context.Faculty.FindAsync(id);

            if (entry == null) return BadRequest();

            var faculty = new Faculty()
            {
                Id = dto.Id,
                InstId = dto.InstId,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                MidInit = dto.MidInit,
                Suffix = dto.Suffix
            };

            _mapper.Map(faculty, entry);

            var result = await _context.SaveChangesAsync() > 0;

            if (!result) return StatusCode(500);

            return NoContent();
        }

        // POST: api/Faculty
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FacultyDto>> PostFaculty(Faculty faculty)
        {
            _context.Faculty.Add(faculty);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFaculty", new { id = faculty.Id }, faculty);
        }

        // DELETE: api/Faculty/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFaculty(int id)
        {
            var faculty = await _context.Faculty.FindAsync(id);
            if (faculty == null) return NotFound();

            _context.Faculty.Remove(faculty);
            var result = await _context.SaveChangesAsync() > 0;

            if (!result) return StatusCode(500);

            return NoContent();
        }
    }
}
