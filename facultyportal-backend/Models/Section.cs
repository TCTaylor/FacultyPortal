using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Section
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public string Number { get; set; } = null!;

        public virtual Course Course { get; set; } = null!;
    }
}
