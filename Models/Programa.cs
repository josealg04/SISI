using Newtonsoft.Json;
using System.Data;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
///<Summary>
/// </Summary>

namespace TutorSharpHTTP.Models
{
    public class Programa
    {
        [Key]
        public int IdPrograma { get; set; }
        [Required]
        public string Nombre { get; set; }
        public int IdFacultad { get; set; }
        [ForeignKey("IdFacultad")]
        public Facultad Facultad { get; set; }
    }
}