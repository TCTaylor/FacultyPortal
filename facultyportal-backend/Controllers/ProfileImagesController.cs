using AutoMapper;
using AutoMapper.QueryableExtensions;
using facultyportal_backend.Models;
using facultyportal_backend.Application.DTOs;
using facultyportal_backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace facultyportal_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileImagesController : ControllerBase
    {
        private readonly FacultyPortalContext _context;
        private readonly IMapper _mapper;

        public ProfileImagesController(FacultyPortalContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //// GET: api/ProfileImages
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<ProfileImagesDto>>> GetProfileImages()
        //{
        //    var profileImages = await _context.ProfileImages
        //        .ProjectTo<ProfileImagesDto>(_mapper.ConfigurationProvider)
        //        .ToListAsync();

        //    return Ok(profileImages);
        //}

        // GET: api/ProfileImages/5
        [HttpGet("{accessorId}")]
        public async Task<ActionResult<ProfileImagesDto>> GetProfileImageByAccessor(int accessorId)
        {
            var profileImage = await _context.ProfileImages
                .Where(c => c.AccessorId == accessorId)
                .ProjectTo<ProfileImagesDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            if (!profileImage.Any()) return NotFound();

            return Ok(profileImage);
        }

        // PUT: api/ProfileImages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfileImage(int id, [FromBody] ProfileImagesDto dto)
        {
            var entry = await _context.ProfileImages.FindAsync(id);

            if (entry == null) return BadRequest();

            _mapper.Map(dto, entry);

            var result = await _context.SaveChangesAsync() > 0;

            if(!result) return StatusCode(500);

            return NoContent();
        }

        //// POST: api/ProfileImages
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<ProfileImagesDto>> PostProfileImage(ProfileImage profileImage)
        //{
        //    _context.ProfileImages.Add(profileImage);

        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetProfileImage", new { id = profileImage.Id }, profileImage);
        //}

        //// DELETE: api/ProfileImages/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteProfileImage(int id)
        //{
        //    var profileImage = await _context.ProfileImages.FindAsync(id);
        //    if (profileImage == null) return NotFound();

        //    _context.ProfileImages.Remove(profileImage);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}
    }
}
