using Microsoft.AspNetCore.Mvc;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Interfaces.Repositories
{
    public interface IUsuarioRepo : IGeralRepo
    {
        Task<IEnumerable<Usuario>> GetUsuariosAsync();
        Task<Usuario> GetUsuarioByNameSenhaAsync(string name, string senha);
        Task<Usuario> GetUsuarioByIdAsync(int usuarioId);
    }
}
