using AutoMapper;
using AutoMapper.Internal;
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
            var faculty = await _context.Faculty
                .ProjectTo<FacultyDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            var dtoList = new List<FacultyDto>();

            for (int i = 0; i < faculty.Count; i++)
            {
                var dto = new FacultyDto
                {
                    Id = faculty[i].Id,
                    InstId = faculty[i].InstId,
                    FirstName = faculty[i].FirstName,
                    LastName = faculty[i].LastName,
                    MidInit = faculty[i].MidInit,
                    Suffix = faculty[i].Suffix,
                    Qualifications = await _context.FacultyQualifications
                    .Where(x => x.FacultyId == faculty[i].Id)
                    .ProjectTo<FacultyQualificationsDto>(_mapper.ConfigurationProvider)
                    .ToListAsync()
                };

                dtoList.Add(dto);

            }

            return Ok(dtoList);

        }

        // GET: api/Faculty/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FacultyDto>> GetFaculty(int id)
        {
            var faculty = await _context.Faculty
                .Where(x => x.Id == id)
                .ProjectTo<FacultyDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            var dto = new FacultyDto();

            for (var x = 0; x < faculty.Count; x++)
            {
                dto.Id = faculty[x].Id;
                dto.InstId = faculty[x].InstId;
                dto.FirstName = faculty[x].FirstName;
                dto.LastName = faculty[x].LastName;
                dto.MidInit = faculty[x].MidInit;
                dto.Suffix = faculty[x].Suffix;
                dto.Qualifications = await _context.FacultyQualifications
                    .Where(x => x.FacultyId == id)
                    .ProjectTo<FacultyQualificationsDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(); ;
            }

            return Ok(dto);
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
