namespace facultyportal_backend.Application.DTOs
{
    public class FacultyDto
    {
        public int Id { get; set; }
        public int? InstId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? MidInit { get; set; }
        public string? Suffix { get; set; }
        public List<QualificationsDto>? Qualifications { get; set; }

    }
}
