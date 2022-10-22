namespace facultyportal_backend.Application.DTOs
{
    public class AccessorsDto
    {
        public int Id { get; set; }
        public int InstId { get; set; }
        public string RoleId { get; set; } = null!;
        public string UserName { get; set; } = null!;
        public string DisplayName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string RoleTitle { get; set; } = null!;
        public string DivisionId { get; set; } = null!;

        // Roles
        public bool IsAdmin { get; set; }
        public bool IsEditor { get; set; }
        public bool IsReadOnly { get; set; }

        // Authentication token
        public string Token { get; set; }
    }
}
