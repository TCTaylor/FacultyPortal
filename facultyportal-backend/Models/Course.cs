using System.ComponentModel.DataAnnotations;

namespace facultyportal_backend.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Code { get; set; }
        public int DivisionId { get; set; }
        public int QualId { get; set; }
        public int MaxSize { get; set; }
        public int MinSize { get; set; }
    }
}
