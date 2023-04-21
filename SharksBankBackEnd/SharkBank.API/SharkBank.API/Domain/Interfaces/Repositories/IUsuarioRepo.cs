using Microsoft.AspNetCore.Mvc;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Interfaces.Repositories
{
    public interface IUsuarioRepo : IGeralRepo
    {
        Task<IEnumerable<Usuario>> GetUsuariosAsync();
        Usuario GetUsuarioByCpfSenha(string cpf, string senha);
        Task<Usuario> GetUsuarioByIdAsync(int usuarioId);
    }
}
