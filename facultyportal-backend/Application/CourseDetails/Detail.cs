using AutoMapper;
using AutoMapper.QueryableExtensions;
using facultyportal_backend.Application.Interfaces;
using facultyportal_backend.Data;
using facultyportal_backend.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace facultyportal_backend.Application.CourseDetails
{
    public class Detail
    {
        private readonly FacultyPortalContext _context;
        private readonly IMapper _mapper;

        public Detail(FacultyPortalContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<CoursesDto>> GetDetails(int id)
        {
            var courseDetails = _context.Courses
                .Include(c => c.Divisions)
                .Include(c => c.Sections)
                .Where(c => c.Id == id)
                .OrderBy(c => c.Title)
                .ProjectTo<CoursesDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return courseDetails.Result;

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
    }
}
