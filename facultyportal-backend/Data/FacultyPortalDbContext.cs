using Microsoft.EntityFrameworkCore;
using facultyportal_backend.Models;

namespace facultyportal_backend.Data
{
    public class FacultyPortalDbContext : DbContext
    {
        public FacultyPortalDbContext(DbContextOptions<FacultyPortalDbContext> options): base(options)
        {  }

        public DbSet<Course> Course { get; set; }
        public DbSet<Division> Division { get; set; }
        public DbSet<Faculty> Faculty { get; set; }
        public DbSet<FacultyCourse> FacultyCourse { get; set; }
        public DbSet<FacultyQualification> FacultyQualification { get; set; }
        public DbSet<Qualification> Qualification { get; set; }
        public DbSet<Section> Section { get; set; }
    }
}
