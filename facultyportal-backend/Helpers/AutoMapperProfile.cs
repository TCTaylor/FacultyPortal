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

            CreateMap<Course, CoursesDto>().ReverseMap();

            CreateMap<Division, DivisionsDto>().ReverseMap();

            CreateMap<FacultyCourse, FacultyCoursesDto>().ReverseMap();

            CreateMap<Faculty, FacultyDto>().ReverseMap();

            CreateMap<FacultyQualification, FacultyQualificationsDto>().ReverseMap();

            CreateMap<ProfileImage, ProfileImagesDto>().ReverseMap();

            CreateMap<Section, SectionsDto>().ReverseMap();
        }
    }
}
