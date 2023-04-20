using Microsoft.EntityFrameworkCore;
using SharkBank.API.Data.Context;
using SharkBank.API.Domain.Interfaces.Repositories;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Data.Repositories
{
    public class ContaRepo : IContaRepo
    {
        private readonly DataContext _context;

        public ContaRepo(DataContext context)
        {
            _context = context;
        }

        public async Task<Conta> GetContaByIdAsync(int contaId)
        {
            IQueryable<Conta> query = _context.Contas;
            query = query.AsNoTracking()
                         .OrderBy(usuario => usuario.Id)
                         .Where(c => c.Id == contaId);

            return await query.FirstOrDefaultAsync();
        }
    }
}
