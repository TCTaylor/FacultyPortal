namespace facultyportal_backend.Models
{
    public class FacultyCourse
    {
        public int Id { get; set; }
        public int FacultyId { get; set; }
        public int CourseId { get; set; }
        public int SectionId { get; set; }
    }
}
