using System.Reflection.Metadata.Ecma335;
using System.Transactions;

namespace SharkBank.API.Domain.Models
{
    public class Conta
    {
        public int Id { get; set; }
        public string Numero { get; set; }
        public string Agencia { get; set; }
        public List<Transacao> Transacoes { get; set; }

    }
}
