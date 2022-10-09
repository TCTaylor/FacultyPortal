using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Faculty
    {
        public Faculty()
        {
            FacultyCourses = new HashSet<FacultyCourse>();
            FacultyQualifications = new HashSet<FacultyQualification>();
        }

        public int Id { get; set; }
        public int? InstId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? MidInit { get; set; }
        public string? Suffix { get; set; }

        public virtual ICollection<FacultyCourse> FacultyCourses { get; set; }
        public virtual ICollection<FacultyQualification> FacultyQualifications { get; set; }
    }
}
