using facultyportal_backend.Models;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace facultyportal_backend.Models.DTOs
{
    public class CoursesDto
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string CourseNumber { get; set; }
        public string Title { get; set; }
        public int QualId { get; set; }
        public int MaxSize { get; set; }
        public int MinSize { get; set; }
        public int DivisionName { get; set; }
        public int SectionNumber { get; set; }

        //public ICollection<DivisionsDto> DivisionsDto { get; set; }
       // public ICollection<SectionsDto> SectionsDto { get; set; }

    }
}
