using Newtonsoft.Json;
using System.Data;
using System;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// </Summary>

namespace TutorSharpHTTP.Models
{
    public class Grupo
    {
        [Key]
        public int IdGrupo { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string LineaInvestigacion { get; set; }
    }
}