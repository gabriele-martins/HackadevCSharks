using SharkBank.API.Domain.Models.Enums;

namespace SharkBank.API.Domain.DTO
{
    public class CriarTransferenciaDTO
    {
        public string Nome { get; set; } = "Text3";
        public DateTime Data { get; set; } = DateTime.Now;
        public double Valor { get; set; } = 200.00;
        public TipoTransacao Tipo { get; set; } = TipoTransacao.TED;
        public bool isEnviada { get; set; } = true;
        public int ContaId { get; set; }
    }
}
