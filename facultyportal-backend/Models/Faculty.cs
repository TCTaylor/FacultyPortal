namespace facultyportal_backend.Models
{
    public class Faculty
    {
        public int Id { get; set; }
        public int Inst_Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public char Mid_Init { get; set; }
        public string Suffix { get; set; }

    }
}
