using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Accessor
    {
        public int Id { get; set; }
        public int InstId { get; set; }
        public string RoleId { get; set; } = null!;
        public string UserName { get; set; } = null!;
        public string? Email { get; set; }
        public string Password { get; set; } = null!;

        public virtual Role Role { get; set; } = null!;
    }
}
