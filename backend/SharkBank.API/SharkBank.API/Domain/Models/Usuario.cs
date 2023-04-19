using SharkBank.API.Domain.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace SharkBank.API.Domain.Models
{
    public class Usuario
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string? Celular { get; set; }
        public string? Cpf { get; set; }
        public string? Senha { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}")]
        public DateTime DataNascimento { get; set; }
        public Genero Genero { get; set; }
        public Conta Conta { get; set; }
        public int ContaId { get; set; }

    }
}
