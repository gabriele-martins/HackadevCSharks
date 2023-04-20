using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Interfaces.Repositories
{
    public interface IContaRepo
    {
        Task<Conta> GetContaByIdAsync(int contaId);
    }
}
