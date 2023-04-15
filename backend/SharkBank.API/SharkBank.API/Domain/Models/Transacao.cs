using SharkBank.API.Domain.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace SharkBank.API.Domain.Models
{
    public class Transacao
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime Data { get; set; }
        public double Valor { get; set; }
        public TipoTransacao Tipo { get; set; }
        public bool IsEnviada { get; set; }
        public int ContaId { get; set; }

        public Transacao(int id, string nome, DateTime data, double valor, TipoTransacao tipo, bool isEnviada, int contaId)
        {
            Id = id;
            Nome = nome;
            Data = data;
            Valor = valor;
            Tipo = tipo;
            IsEnviada = isEnviada;
            ContaId = contaId;  
        }
    }
}