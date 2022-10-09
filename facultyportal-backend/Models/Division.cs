using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Division
    {
        public Division()
        {
            Courses = new HashSet<Course>();
        }

        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;

        public virtual ICollection<Course> Courses { get; set; }
    }
}
