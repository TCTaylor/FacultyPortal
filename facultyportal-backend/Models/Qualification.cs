using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Qualification
    {
        public Qualification()
        {
            Courses = new HashSet<Course>();
            FacultyQualifications = new HashSet<FacultyQualification>();
        }

        public int Id { get; set; }
        public string Credential { get; set; } = null!;

        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<FacultyQualification> FacultyQualifications { get; set; }
    }
}
