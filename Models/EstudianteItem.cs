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
        public string TipoDocumento { get; set; }
        [Key]
        [JsonProperty("cedula")]
        public uint Cedula { get; set; }
        [JsonProperty("primerNombre")]
        public string PrimerNombre { get; set; }
         [JsonProperty("segundoNombre")]
        public string SegundoNombre { get; set; }
        [JsonProperty("primerApellido")]
        public string PrimerApellido { get; set; }
        [JsonProperty("segundoApellido")]
        public string SegundoApellido { get; set; }
        [JsonProperty("genero")]
        public string Genero { get; set; }
        [JsonProperty("fechaNacimiento")]
        public DateTime FechaNacimiento { get; set; }
        [JsonProperty("direccion")]
        public string Direccion { get; set; }
        [JsonProperty("telefono")]
        public uint Telefono { get; set; }
        [JsonProperty("email_Personal")]
        public string Email_Personal { get; set; }
        [JsonProperty("fechaIngreso")]
        public DateTime FechaIngreso { get; set; }
        [JsonProperty("facultad")]
        public string Facultad { get; set; }
        [JsonProperty("programa")]
        public string Programa { get; set; }
        [JsonProperty("semestre")]
        public string Semestre { get; set; }
        [JsonProperty("email_Institucional")]
        public string Email_Institucional { get; set; }
        [JsonProperty("cvlac")]
        public string Cvlac { get; set; }
    }
}