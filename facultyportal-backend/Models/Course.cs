using System.ComponentModel.DataAnnotations;

namespace facultyportal_backend.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Code { get; set; }
        public string Division_Id { get; set; }
        public int Qual_Id { get; set; }
        public int Max_Size { get; set; }
        public int Min_Size { get; set; }
    }
}
