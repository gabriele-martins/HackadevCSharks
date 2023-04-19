using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.DTO
{
    public class UsuarioReduzidoDTO
    {
        public string? Nome { get; set; }
        public string Cpf { get; set; }
        public ContaReduzidaDTO Conta { get; set; }
    }
}
