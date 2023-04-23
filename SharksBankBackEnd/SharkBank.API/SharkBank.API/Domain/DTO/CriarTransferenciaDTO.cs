using SharkBank.API.Domain.Models.Enums;
using System.Text.Json.Serialization;

namespace SharkBank.API.Domain.DTO
{
    public class CriarTransferenciaDTO
    {
        public double Valor { get; set; }
        public TipoTransacao Tipo { get; set; }
        public string NumeroContaOrigem { get; set; }
        public string NumeroContaDestino { get; set; }
        public string Mensagem { get; set; }
    }
}
