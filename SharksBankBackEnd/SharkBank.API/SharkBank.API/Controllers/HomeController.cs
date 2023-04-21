using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SharkBank.API.Data.Context;
using SharkBank.API.Domain.Interfaces.Repositories;
using SharkBank.API.Domain.Interfaces.Services;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IUsuarioRepo _usuarioRepo;

        public HomeController(IUsuarioRepo usuarioRepo)
        {
            _usuarioRepo = usuarioRepo;
        }
        
        [HttpGet]
        [Route("autenticado")]
        [AllowAnonymous]
        public IActionResult Login(string cpf, string senha)
        {
            var usuario = _usuarioRepo.GetUsuarioByCpfSenha(cpf, senha); 
            if (usuario == null)
            {
                return Redirect("/Home"); 
            }

            return Redirect("/Saldo"); 
        }
    }
}

