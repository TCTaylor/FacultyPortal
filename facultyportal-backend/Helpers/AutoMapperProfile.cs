using AutoMapper;
using facultyportal_backend.Application.DTOs;
using facultyportal_backend.Models;

namespace facultyportal_backend.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Accessor, AccessorsDto>().ReverseMap();

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
                               SectionNumber = src.SectionNumber,
                           }));

            CreateMap<Faculty, FacultyDto>()
                .ReverseMap()
                .ForMember(dest => dest.FacultyQualifications,
                           opts => opts.MapFrom(src => new FacultyQualification
                           {
                               Credential = src.Credential,
                           }));

            CreateMap<FacultyQualification, FacultyQualificationsDto>().ReverseMap();

            //CreateMap<Role, RolesDto>().ReverseMap();

            CreateMap<Section, SectionsDto>().ReverseMap();
        }
    }
}
