using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SharkBank.API.Data.Context;
using SharkBank.API.Domain.DTO;
using SharkBank.API.Domain.Interfaces.Services;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUsuarioService _usuarioService;

        public UsuariosController(DataContext context, IMapper mapper, IUsuarioService usuarioService)
        {
            _context = context;
            _mapper = mapper;
            _usuarioService = usuarioService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var usuarios = await _usuarioService.PegarUsuariosAsync(); 
                List<UsuarioReduzidoDTO> usuariosRetorno = new List<UsuarioReduzidoDTO>();

                foreach (var usuario in usuarios)
                {
                    usuariosRetorno.Add(new UsuarioReduzidoDTO
                    {
                        Cpf = usuario.Cpf,
                        Nome = usuario.Nome,
                        Conta = new ContaReduzidaDTO
                        {
                            Agencia = usuario.Conta.Agencia,
                            Numero = usuario.Conta.Numero
                        }
                    });
                }; 
                if (usuarios == null)
                {
                    return NoContent();
                }
                return Ok(usuariosRetorno);
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                                       $"Erro ao tentar recuperar usuários. Erro: {e.Message}");
            }
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var usuarioBancoDeDados = _context.Usuarios.Include(u => u.Conta)
                                                       .ThenInclude(c => c.Transacoes)
                                                       .Where(u => u.Id == id)
                                                       .FirstOrDefault();

            if (usuarioBancoDeDados == null) return NotFound(new
            {
                Moment = DateTime.Now,
                Message = $"Usuário não encontrado = {id}."
            });

            var usuarioDTO = _mapper.Map<UsuarioDTO>(usuarioBancoDeDados);
            return Ok(usuarioDTO);
        }

        [HttpPost]
        public IActionResult RegisterUser(
        [FromBody] UsuarioDTO usuarioRequisicao
        )
        {
            var usuario = _mapper.Map<Usuario>(usuarioRequisicao);
            Random rnd = new Random ();

            Conta novaConta = new Conta();
            novaConta.Agencia = "0001";
            novaConta.Numero = rnd.Next(00000001,999999999).ToString();
            novaConta.Transacoes = new List<Transacao>();
            _context.Contas.Add(novaConta);
            _context.SaveChanges();

            var contaSalva = _context.Contas.FirstOrDefault(conta => conta.Numero == novaConta.Numero);
            usuario.Conta = contaSalva;
            usuario.ContaId = contaSalva.Id;
            usuario.Conta.Saldo = 1000.00; 
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            
            var usuarioDTO = _mapper.Map<UsuarioDTO>(usuario);

            return CreatedAtAction(nameof(GetById), new { Id = usuario.Id }, usuarioDTO);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Usuario model)
        {
            try
            {
                
                if (model.Id != id)
                {
                    this.StatusCode(StatusCodes.Status409Conflict,
                                    $"Você está tentando atualizar o usuário errado.");
                }
                var usuario = await _usuarioService.AtualizarUsuario(model);

                if (usuario == null)
                {
                    return NoContent();
                }
                return Ok(usuario);
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                                       $"Erro ao tentar recuperar usuário com o ID {id}. Erro: {e.Message}");
            }

        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var usuario = await _usuarioService.PegarUsuarioIdAsync(id); 

                if (usuario == null)
                {
                    this.StatusCode(StatusCodes.Status409Conflict,
                                  $"Você está deletar o usuário errado ou ele não existe.");
                }
                if (await _usuarioService.DeletarUsuario(id))
                {
                    return Ok(new {message = "Deletado"}); 
                }
                else
                {
                    return BadRequest("Ocorreu um problema ao tentar deletar o usuário.");
                }
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                                       $"Erro ao tentar deletar o usuário com o ID {id}. Erro: {e.Message}");
            }
        }

    }
}
