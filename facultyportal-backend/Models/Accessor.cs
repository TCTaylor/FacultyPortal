using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Accessor
    {
        public Accessor()
        {
            ProfileImages = new HashSet<ProfileImage>();
        }

        public int Id { get; set; }
        public int InstId { get; set; }
        public string RoleId { get; set; } = null!;
        public string DivisionId { get; set; } = null!;
        public string UserName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;

        public virtual Division Division { get; set; } = null!;
        public virtual Role Role { get; set; } = null!;
        public virtual ICollection<ProfileImage> ProfileImages { get; set; }
    }
}
