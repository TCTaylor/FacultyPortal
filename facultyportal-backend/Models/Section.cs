using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Section
    {
        public Section()
        {
            FacultyCourses = new HashSet<FacultyCourse>();
        }

        public int Id { get; set; }
        public int CourseId { get; set; }
        public string SectionNumber { get; set; } = null!;

        public virtual Course Course { get; set; } = null!;
        public virtual ICollection<FacultyCourse> FacultyCourses { get; set; }
    }
}
