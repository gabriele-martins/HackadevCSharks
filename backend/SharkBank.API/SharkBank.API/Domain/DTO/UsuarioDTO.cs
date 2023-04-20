using SharkBank.API.Domain.Models;
using SharkBank.API.Domain.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace SharkBank.API.Domain.DTO
{
    public class UsuarioDTO
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Celular { get; set; }
        public string Cpf { get; set; }
        public string Senha { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime DataNascimento { get; set; }
        public Genero Genero { get; set; }
        [JsonIgnore]
        public ContaDTO Conta { get; set; }
    }
}
