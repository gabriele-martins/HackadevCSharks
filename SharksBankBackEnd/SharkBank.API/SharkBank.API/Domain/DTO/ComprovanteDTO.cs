namespace SharkBank.API.Domain.DTO
{
    public class ComprovanteDTO
    {
        public DateTime Data { get; set; }
        public double Valor { get; set; }
        public UsuarioReduzidoDTO UsuarioOrigem { get; set; }
        public UsuarioReduzidoDTO UsuarioDestino { get; set; }
        public string Mensagem { get; set; }
    }
}
