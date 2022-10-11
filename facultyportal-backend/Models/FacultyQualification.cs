namespace facultyportal_backend.Models
{
    public partial class FacultyQualification
    {
        public int Id { get; set; }
        public int FacultyId { get; set; }
        public int QualId { get; set; }

        public virtual Faculty Faculty { get; set; } = null!;
        public virtual Qualification Qual { get; set; } = null!;
    }
}
