using SharkBank.API.Data.Repositories;
using SharkBank.API.Domain.Interfaces.Repositories;
using SharkBank.API.Domain.Interfaces.Services;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Services
{
    public class ContaService : IContaService
    {
        private readonly IContaRepo _contaRepo;

        public ContaService(IContaRepo contaRepo)
        {
            _contaRepo = contaRepo;
        }

        public async Task<Conta> PegarContaIdAsync(int contaId)
        {
            try
            {
                var conta = await _contaRepo.GetContaByIdAsync(contaId);
                if (conta == null)
                {
                    return null;
                }
                return conta;
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
        }
    }
}
