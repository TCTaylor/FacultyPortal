using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Course
    {
        public Course()
        {
            FacultyCourses = new HashSet<FacultyCourse>();
            Sections = new HashSet<Section>();
        }

        public int Id { get; set; }
        public string Subject { get; set; } = null!;
        public string CourseNumber { get; set; } = null!;
        public string Title { get; set; } = null!;
        public string DivisionId { get; set; } = null!;
        public int QualId { get; set; }
        public int MaxSize { get; set; }
        public int MinSize { get; set; }

        public virtual Division Divisions { get; set; } = null!;
        public virtual Qualification Qual { get; set; } = null!;
        public virtual ICollection<FacultyCourse> FacultyCourses { get; set; }
        public virtual ICollection<Section> Sections { get; set; }
    }
}
