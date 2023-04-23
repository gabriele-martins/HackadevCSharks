using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.DTO
{
    public class ContaDTO
    {
        public string Numero { get; set; }
        public string Agencia { get; set; }
        public double Saldo { get; set; }
        public List<TransacaoDTO> Transacoes { get; set; }
    }
}
