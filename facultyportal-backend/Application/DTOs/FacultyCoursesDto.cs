namespace facultyportal_backend.Application.DTOs
{
    public class FacultyCoursesDto
    {
        public int Id { get; set; }
        public int FacultyId { get; set; }
        public int CourseId { get; set; }
        public string? CourseSubject { get; set; }
        public string? CourseNumber { get; set; }
        public string? CourseTitle { get; set; }
        public string? SectionNumber { get; set; }
    }
}
