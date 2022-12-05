namespace facultyportal_backend.Application.DTOs
{
    public class CoursesDto
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Number { get; set; }
        public string Title { get; set; }
        public string DivisionId { get; set; }
        public int MaxSize { get; set; }
        public int MinSize { get; set; }
        public string SectionNumber { get; set; }

    }
}
