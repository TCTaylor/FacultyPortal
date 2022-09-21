namespace facultyportal_backend.Models
{
    public class Faculty
    {
        public int Id { get; set; }
        public int InstId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public char MidInit { get; set; }
        public string Suffix { get; set; }

    }
}
