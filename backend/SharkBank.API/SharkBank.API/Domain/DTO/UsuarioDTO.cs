using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.DTO
{
    public class UsuarioDTO
    {
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string? Celular { get; set; }
        public string? Cpf { get; set; }
        public string? Senha { get; set; }
        public ContaDTO? Conta { get; set; }
    }
}
