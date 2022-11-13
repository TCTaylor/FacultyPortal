using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class FacultyQualification
    {
        public int Id { get; set; }
        public int FacultyId { get; set; }
        public string Credential { get; set; } = null!;

        public virtual Faculty Faculty { get; set; } = null!;
    }
}
