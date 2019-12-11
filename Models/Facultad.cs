using Newtonsoft.Json;
using System.Data;
using System;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// </Summary>

namespace TutorSharpHTTP.Models
{
    public class Facultad
    {
        [Key]
        public int IdFacultad { get; set; }
        [Required]
        public string Nombre { get; set; }
    }
}