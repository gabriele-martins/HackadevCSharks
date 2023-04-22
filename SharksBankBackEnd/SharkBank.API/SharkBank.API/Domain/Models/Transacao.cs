using SharkBank.API.Domain.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace SharkBank.API.Domain.Models
{
    public class Transacao
    {
        [Key]
        [Required]
        public int Id { get; set; }
        
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy HH:mm}")]
        public DateTime Data { get; set; } = DateTime.Now;
        public double Valor { get; set; }
        public string Mensagem { get; set; }
        public TipoTransacao Tipo { get; set; }
        public bool IsEnviada { get; set; }
        [JsonIgnore]
        public Conta Conta { get; set; }
        public int ContaId { get; set; }
    }
}