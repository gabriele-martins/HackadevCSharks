﻿using Microsoft.EntityFrameworkCore;
using SharkBank.API.Data.Context;
using SharkBank.API.Domain.Interfaces.Repositories;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Data.Repositories
{
    public class UsuarioRepo : GeralRepo, IUsuarioRepo
    {
        private readonly DataContext _context;

        public UsuarioRepo(DataContext context) : base(context) 
        {
            _context = context;
        }

        public async Task<Usuario> GetUsuarioByIdAsync(int usuarioId)
        {
            IQueryable<Usuario> query = _context.Usuarios;
            query = query.AsNoTracking()
                         .OrderBy(usuario => usuario.Id)
                         .Where(u => u.Id == usuarioId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Usuario> GetUsuarioByNameSenhaAsync(string nome, string senha)
        {
            IQueryable<Usuario> query = _context.Usuarios;
            query = query.AsNoTracking()
                         .Where(u => u.Nome == nome && u.Senha == senha);
                        

            return await query.FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Usuario>> GetUsuariosAsync()
        {
            IQueryable<Usuario> query = _context.Usuarios;
            query = query.AsNoTracking()
                         .OrderBy(usuario => usuario.Id)
                         .Include(u => u.Conta)
                         .Include(u => u.Conta.Transacoes);

            return await query.ToListAsync(); 
        }
    }
}