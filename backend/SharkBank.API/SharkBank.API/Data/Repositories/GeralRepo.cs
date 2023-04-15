using SharkBank.API.Data.Context;
using SharkBank.API.Domain.Interfaces.Repositories;

namespace SharkBank.API.Data.Repositories
{
    public class GeralRepo : IGeralRepo
    {
        private readonly DataContext _context;

        public GeralRepo(DataContext context)
        {
            _context = context;
        }
        public void Adicionar<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Atualizar<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Deletar<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<bool> SalvarMudançasAsync()
        {
            return (await _context.SaveChangesAsync() > 0);
        }
    }
}
