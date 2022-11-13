using System;
using System.Collections.Generic;
using facultyportal_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace facultyportal_backend.Data
{
    public partial class FacultyPortalContext : DbContext
    {
        public FacultyPortalContext()
        {
        }

        public FacultyPortalContext(DbContextOptions<FacultyPortalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Accessor> Accessors { get; set; } = null!;
        public virtual DbSet<Course> Courses { get; set; } = null!;
        public virtual DbSet<Division> Divisions { get; set; } = null!;
        public virtual DbSet<Faculty> Faculty { get; set; } = null!;
        public virtual DbSet<FacultyCourse> FacultyCourses { get; set; } = null!;
        public virtual DbSet<FacultyQualification> FacultyQualifications { get; set; } = null!;
        public virtual DbSet<ProfileImage> ProfileImages { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Section> Sections { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Accessor>(entity =>
            {
                entity.ToTable("Accessor");

                entity.Property(e => e.DivisionId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("Division_Id");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InstId).HasColumnName("Inst_Id");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RoleId)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("Role_Id");

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("User_Name");

                entity.HasOne(d => d.Division)
                    .WithMany(p => p.Accessors)
                    .HasForeignKey(d => d.DivisionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Accessor_Division");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Accessors)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Accessor_Role");
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course");

                entity.Property(e => e.DivisionId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("Division_Id");

                entity.Property(e => e.MaxSize).HasColumnName("Max_Size");

                entity.Property(e => e.MinSize).HasColumnName("Min_Size");

                entity.Property(e => e.Number)
                    .HasMaxLength(4)
                    .IsUnicode(false);

                entity.Property(e => e.SectionNumber)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("Section_Number");

                entity.Property(e => e.Subject)
                    .HasMaxLength(4)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Division)
                    .WithMany(p => p.Courses)
                    .HasForeignKey(d => d.DivisionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Course_Division");
            });

            modelBuilder.Entity<Division>(entity =>
            {
                entity.ToTable("Division");

                entity.Property(e => e.Id)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Faculty>(entity =>
            {
                entity.ToTable("Faculty");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("First_Name");

                entity.Property(e => e.InstId).HasColumnName("Inst_Id");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Last_Name");

                entity.Property(e => e.MidInit)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("Mid_Init")
                    .IsFixedLength();

                entity.Property(e => e.Suffix)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<FacultyCourse>(entity =>
            {
                entity.ToTable("Faculty_Course");

                entity.Property(e => e.CourseId).HasColumnName("Course_Id");

                entity.Property(e => e.FacultyId).HasColumnName("Faculty_Id");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.FacultyCourses)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Faculty_Course_Course");

                entity.HasOne(d => d.Faculty)
                    .WithMany(p => p.FacultyCourses)
                    .HasForeignKey(d => d.FacultyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Faculty_Course_Faculty");
            });

            modelBuilder.Entity<FacultyQualification>(entity =>
            {
                entity.ToTable("Faculty_Qualification");

                entity.Property(e => e.Credential)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FacultyId).HasColumnName("Faculty_Id");

                entity.HasOne(d => d.Faculty)
                    .WithMany(p => p.FacultyQualifications)
                    .HasForeignKey(d => d.FacultyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Faculty_Qualification_Faculty");
            });

            modelBuilder.Entity<ProfileImage>(entity =>
            {
                entity.ToTable("Profile_Image");

                entity.Property(e => e.AccessorId).HasColumnName("Accessor_Id");

                entity.Property(e => e.ImagePath)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("Image_Path");

                entity.HasOne(d => d.Accessor)
                    .WithMany(p => p.ProfileImages)
                    .HasForeignKey(d => d.AccessorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Profile_Accessor");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role");

                entity.Property(e => e.Id)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Section>(entity =>
            {
                entity.ToTable("Section");

                entity.Property(e => e.CourseId).HasColumnName("Course_Id");

                entity.Property(e => e.Number)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Sections)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Section_Course");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
