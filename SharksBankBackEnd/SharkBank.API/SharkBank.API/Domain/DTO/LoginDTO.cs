using SharkBank.API.Domain.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace SharkBank.API.Domain.DTO
{
    public class LoginDTO
    {
        public string Cpf { get; set; }
        public string Senha { get; set; }
    }
}
