using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using Microsoft.EntityFrameworkCore;
using SharkBank.API.Domain.DTO;
using SharkBank.API.Domain.Interfaces.Repositories;
using SharkBank.API.Domain.Interfaces.Services;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepo _usuarioRepo;
        private readonly IGeralRepo _geralRepo;

        public UsuarioService(IUsuarioRepo usuarioRepo, IGeralRepo geralRepo)
        {
            _usuarioRepo = usuarioRepo;
            _geralRepo = geralRepo;
        }
        public async Task<Usuario> AtualizarUsuario(Usuario usuario)
        {
           if (await _usuarioRepo.GetUsuarioByIdAsync(usuario.Id) != null)
            {
                _usuarioRepo.Atualizar(usuario);

                if (await _usuarioRepo.SalvarMudancasAsync())
                {
                    return usuario;
                }             
            }

            return null; 
        }

        public async Task<bool> DeletarUsuario(int usuarioId)
        {
            var usuario = await _usuarioRepo.GetUsuarioByIdAsync(usuarioId); 
            if (usuario == null)
            {
                throw new Exception("Usuário não existe"); 
            }

            _usuarioRepo.Deletar(usuario);
            return await _usuarioRepo.SalvarMudancasAsync(); 
          
        }

        public async Task<Usuario> PegarUsuarioIdAsync(int usuarioId)
        {
            try
            {
                var usuario = await _usuarioRepo.GetUsuarioByIdAsync(usuarioId); 
                if (usuario == null)
                {
                    return null; 
                }
                return usuario;
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
        }

        public async Task<IEnumerable<Usuario>> PegarUsuariosAsync()
        {
            try
            {
                var usuarios = await _usuarioRepo.GetUsuariosAsync();
                if (usuarios == null)
                {
                    return null;
                }
                return usuarios;
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
        }

    }
}
