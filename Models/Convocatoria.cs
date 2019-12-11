using Newtonsoft.Json;
using System.Data;
using System;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// </Summary>

namespace TutorSharpHTTP.Models
{
    public class Convocatoria
    {
        [Key]
        public int IdConvocatoria { get; set; }
        [Required]
        public DateTime FechaInicio { get; set; }
        [Required]
        public DateTime FechaFinal { get; set; }
    }
}