namespace facultyportal_backend.Models.DTOs
{
    public class FacultyCoursesDto
    {
        public int Id { get; set; }
        public int FacultyId { get; set; }
        public int CourseSubject { get; set; }
        public int CourseNumber { get; set; }
        public int CourseTitle { get; set; }
        public int SectionNumber { get; set; }
    }
}
