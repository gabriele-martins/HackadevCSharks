using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SharkBank.API.Domain.DTO;
using SharkBank.API.Domain.Interfaces.Repositories;
using SharkBank.API.Domain.Models;
using SharkBank.API.Domain.Services;

namespace SharkBank.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepo _usuarioRepo;
        private readonly TokenService _tokenService;
        private readonly IMapper _mapper;

        public LoginController(IUsuarioRepo usuarioRepo, TokenService tokenService, IMapper mapper)
        {
            _usuarioRepo = usuarioRepo;
            _tokenService = tokenService;
            _mapper = mapper;
        }
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<dynamic>> AuthenticateAsync([FromBody] LoginDTO model)
        {

            var usuario = _usuarioRepo.GetUsuarioByNameSenha(model.Nome, model.Senha); 

            if (usuario == null)
            {
                return NotFound(new{ Message = "Usuário ou senha inválidos"}); 
            }

            var token = _tokenService.GerarToken(usuario);
            usuario.Senha = "";

            return new
            {
                usuario = usuario,
                token = token
            }; 
        }
    }
}
