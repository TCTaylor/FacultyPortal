using facultyportal_backend.Application.DTOs;
using facultyportal_backend.Data;
using facultyportal_backend.Helpers;
using facultyportal_backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace facultyportal_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly int PWD_LENGTH = 8;
        private readonly FacultyPortalContext _context;
        //private readonly SignInManager<Accessor> _signInManager;
        //private readonly TokenService _tokenService;

        public AccountsController(
            FacultyPortalContext context
            //SignInManager<Accessor> signInManager
            /*TokenService tokenService*/)
        {
            _context = context;
            //_signInManager = signInManager;
            //_tokenService = tokenService;
        }

        [HttpPost("sign-in")]
        public async Task<ActionResult<AccessorsDto>> SignIn([FromBody] SignInDto signInDto)
        {
            var accessor = await _context.Accessors
               .Include(x => x.Role)
               .Include(x => x.Division)
               .FirstOrDefaultAsync(x => x.Email == signInDto.Email);

            if (accessor == null ||
                accessor.RoleId == "None")
                return Unauthorized();

            //var result = await _signInManager.CheckPasswordSignInAsync(accessor, signInDto.Password, false);
            var result = accessor.Password == signInDto.Password;

            if (result) return await CreateAccessorAsync(accessor);

            return Unauthorized();

        }

        [HttpPut("pw-reset")]
        public async Task<ActionResult<AccessorsDto>> ResetPassword(string userName)
        {
            var accessor = await _context.Accessors.FindAsync(userName);

            if (accessor == null ||
                accessor.RoleId == "None")
                return BadRequest();

            string validChars = 
                "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?_-";
            Random random = new();

            char[] chars = new char[PWD_LENGTH];
            for (int i = 0; i < PWD_LENGTH; i++)
            {
                chars[i] = validChars[random.Next(0, validChars.Length)];
            }

            var password = new string(chars);

            password.ToLower();

            //accessor.Password = new string(chars);

            //var result = await _context.SaveChangesAsync() > 0;

            //if (!result) return StatusCode(500);

            return NoContent();

        }

        //[HttpGet]
        //public async Task<ActionResult<AccessorsDto>> GetAccessor(SignInDto tokenDto)
        //{
        //}

        private async Task<AccessorsDto> CreateAccessorAsync(Accessor accessor)
        {
            var faculty = await _context.Faculty
                .FirstOrDefaultAsync(x => x.InstId == accessor.InstId);

            return new AccessorsDto
            {
                Id = accessor.Id,
                InstId = accessor.InstId,
                FacultyId = (faculty != null) ? faculty.Id : 0,
                RoleId = accessor.RoleId,
                UserName = accessor.UserName,
                DisplayName = (faculty != null)
                              ? faculty.FirstName : accessor.UserName,
                Email = accessor.Email,
                Password = accessor.Password,
                RoleTitle = accessor.Role.Title,
                DivisionId = accessor.Division.Id,

                // Roles
                IsAdmin = accessor.RoleId.Equals("Adm"),
                IsEditor = accessor.RoleId.Equals("E"),
                IsReadOnly = accessor.RoleId.Equals("R"),

                // Authentication token
                //Token = _tokenService.CreateToken(accessor),
                Token = "test123",
            };
        }
    }
}
