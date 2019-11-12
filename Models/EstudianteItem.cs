using Newtonsoft.Json;
using System.Data;
using System;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// </Summary>
namespace TutorSharpHTTP.Models
{
    public class EstudianteItem
    {
        [JsonProperty("tipoDocumento")]
        [Required]
        public string TipoDocumento { get; set; }
        [Key]
        [JsonProperty("cedula")]
        [Required, MaxLength(12)]
        public string Cedula { get; set; }
        [JsonProperty("primerNombre")]
        [Required]
        public string PrimerNombre { get; set; }
        [JsonProperty("segundoNombre")]
        public string SegundoNombre { get; set; }
        [JsonProperty("primerApellido")]
        [Required]
        public string PrimerApellido { get; set; }
        [JsonProperty("segundoApellido")]
        [Required]
        public string SegundoApellido { get; set; }
        [JsonProperty("genero")]
        [Required]
        public string Genero { get; set; }
        [JsonProperty("fechaNacimiento")]
        [Required]
        public DateTime FechaNacimiento { get; set; }
        [JsonProperty("direccion")]
        [Required]
        public string Direccion { get; set; }
        [JsonProperty("telefono")]
        [Required, MaxLength(15)]
        public string Telefono { get; set; }
        [JsonProperty("email_Personal")]
        [Required, EmailAddress]
        public string Email_Personal { get; set; }
        [JsonProperty("fechaIngreso")]
        [Required]
        public DateTime FechaIngreso { get; set; }
        [JsonProperty("facultad")]
        [Required]
        public string Facultad { get; set; }
        [JsonProperty("programa")]
        [Required]
        public string Programa { get; set; }
        [JsonProperty("semestre")]
        [Required]
        public string Semestre { get; set; }
        [JsonProperty("email_Institucional")]
        [Required, EmailAddress]
        public string Email_Institucional { get; set; }
        [JsonProperty("cvlac")]
        [Required, Url]
        public string Cvlac { get; set; }
    }
}