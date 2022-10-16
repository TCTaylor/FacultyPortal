namespace facultyportal_backend.Models
{
    public partial class FacultyCourse
    {
        public int Id { get; set; }
        public int FacultyId { get; set; }
        public int CourseId { get; set; }

        public virtual Course Course { get; set; } = null!;
        public virtual Faculty Faculty { get; set; } = null!;
    }
}
