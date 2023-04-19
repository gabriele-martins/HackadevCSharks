using SharkBank.API.Domain.Models.Enums;

namespace SharkBank.API.Domain.DTO
{
    public class TransacaoDTO
    {
        public DateTime Data { get; set; }
        public double Valor { get; set; }
        public TipoTransacao Tipo { get; set; }
        public bool IsEnviada { get; set; }
    }
}
