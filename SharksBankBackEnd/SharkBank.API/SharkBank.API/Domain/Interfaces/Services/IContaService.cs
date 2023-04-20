using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Interfaces.Services
{
    public interface IContaService
    {
        Task<Conta> PegarContaIdAsync(int usuarioId);
    }
}
