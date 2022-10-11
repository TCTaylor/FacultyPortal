using AutoMapper;
using facultyportal_backend.Models;
using facultyportal_backend.Models.DTOs;

namespace facultyportal_backend.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Course, CoursesDto>();
            CreateMap<Division, DivisionsDto>();
            CreateMap<FacultyCourse, FacultyCoursesDto>();
            CreateMap<Faculty, FacultyDto>();
            CreateMap<FacultyQualification, FacultyQualificationsDto>();
            CreateMap<Qualification, QualificationsDto>();
            CreateMap<Section, SectionsDto>();        }
    }
}
