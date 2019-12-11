using Newtonsoft.Json;
using System.Data;
using System;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// </Summary>
namespace TutorSharpHTTP.Models
{
    public class TutorItem
    {
        [Required]
        public string TipoDocumento { get; set; }
        [Key]
        [Required, MaxLength(12)]
        public string Cedula { get; set; }
        [Required]
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        [Required]
        public string PrimerApellido { get; set; }
        [Required]
        public string SegundoApellido { get; set; }
        [Required]
        public string Genero { get; set; }
        [Required]
        public DateTime FechaNacimiento { get; set; }
        [Required]
        public string Direccion { get; set; }
        [Required, MaxLength(15)]
        public string Telefono { get; set; }
        [Required, EmailAddress]
        public string Email_Personal { get; set; }
        [Required]
        public DateTime FechaIngreso { get; set; }
        [Required]
        public string Programa { get; set; }
        [Required, EmailAddress]
        public string Email_Institucional { get; set; }
        [Required, Url]
        public string Cvlac { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}