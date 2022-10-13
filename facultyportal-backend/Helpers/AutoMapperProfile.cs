using AutoMapper;
using facultyportal_backend.Models;
using facultyportal_backend.Models.DTOs;

namespace facultyportal_backend.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Course, CoursesDto>()
                .ReverseMap()
                .ForMember(dest => dest.Division,
                           opts => opts.MapFrom(src => new Division
                           {
                               Name = src.DivisionName
                           }));

            CreateMap<Division, DivisionsDto>().ReverseMap();

            CreateMap<FacultyCourse, FacultyCoursesDto>()
                .ReverseMap()
                .ForMember(dest => dest.Course,
                           opts => opts.MapFrom(src => new Course
                           {
                               Subject = src.CourseSubject,
                               Number = src.CourseNumber,
                               Title = src.CourseTitle,
                               SectionNumber = src.SectionNumber
                           }));

            CreateMap<Faculty, FacultyDto>().ReverseMap();

            CreateMap<FacultyQualification, FacultyQualificationsDto>().ReverseMap();

            CreateMap<Qualification, QualificationsDto>().ReverseMap();

            CreateMap<Section, SectionsDto>().ReverseMap();
        }
    }
}
