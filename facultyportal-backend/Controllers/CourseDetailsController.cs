using facultyportal_backend.Application.CourseDetails;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using facultyportal_backend.Models;
using facultyportal_backend.Data;
using Microsoft.EntityFrameworkCore;

namespace facultyportal_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseDetailsController : ControllerBase
    {
        private readonly FacultyPortalDbContext _context;
        //private readonly IConfiguration _configuration;
        
        public CourseDetailsController(FacultyPortalDbContext context)
        {
            _context = context;
        }
        //public CourseDetailsController (IConfiguration configuration)
        //{
        //    _configuration = configuration;
        //}

        // TODO: needs work to join up data to specifically get this, not just FacultyCourse

        // GET: api/CourseDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FacultyCourse>>> GetCourseDetails()
        {
            return await _context.FacultyCourse.ToListAsync();
        }

        // PUT: api/CourseDetails
        //[HttpPut("{}")]


        //[HttpGet]
        //public JsonResult Get()
        //{
        //    string query = @"SELECT Course.Title, Course.Code, Course.Max_Size, Course.Min_Size,
        //                     Section.Number, Division.Name
        //                     FROM dbo.Course
        //                     JOIN dbo.Section ON Section.Course_Id = Course.Id
        //                     JOIN dbo.Division ON Division.Id = Course.Division_Id
        //                     ";
        //    DataTable table = new();
        //    string sqlDataSource = _configuration.GetConnectionString("FacultyPortalAppConnection");
        //    SqlDataReader myReader;
        //    using (SqlConnection myCon = new(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using SqlCommand myCommand = new(query, myCon);
        //        myReader = myCommand.ExecuteReader();
        //        table.Load(myReader);
        //        myReader.Close();
        //        myCon.Close();
        //    }

        //    return new JsonResult(table);
        //}
    }
}
