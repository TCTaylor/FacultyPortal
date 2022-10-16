using System;
using System.Collections.Generic;

namespace facultyportal_backend.Models
{
    public partial class Role
    {
        public Role()
        {
            Accessors = new HashSet<Accessor>();
        }

        public string Id { get; set; } = null!;
        public string Title { get; set; } = null!;

        public virtual ICollection<Accessor> Accessors { get; set; }
    }
}
