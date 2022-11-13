using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class ProfileImage
    {
        public int Id { get; set; }
        public int AccessorId { get; set; }
        public string? ImagePath { get; set; }

        public virtual Accessor Accessor { get; set; } = null!;
    }
}
