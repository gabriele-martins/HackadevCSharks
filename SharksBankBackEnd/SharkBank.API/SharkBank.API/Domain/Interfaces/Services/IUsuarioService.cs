using Microsoft.AspNetCore.Mvc;
using SharkBank.API.Domain.DTO;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Interfaces.Services
{
    public interface IUsuarioService
    {
        Task<Usuario> AtualizarUsuario(Usuario usuario);
        Task<IEnumerable<Usuario>> PegarUsuariosAsync();
        Task<Usuario> PegarUsuarioIdAsync(int usuarioId);
        Usuario LoginUsuario(string cpf, string senha);
        Task<bool> DeletarUsuario(int usuarioId);
        //Task<Usuario> AdicionarUsuario(AdicionarUsuarioDTO usuario);
    }
}
