using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.DTO
{
    public class UsuarioReduzidoDTO
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public double Saldo { get; set; } = 1000.00;
        public Conta Conta { get; set; }
    }
}
