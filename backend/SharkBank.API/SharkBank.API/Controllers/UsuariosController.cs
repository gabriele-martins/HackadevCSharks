using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SharkBank.API.Data.Context;
using SharkBank.API.Domain.DTO;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;


        public UsuariosController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            return _context.Usuarios.Include(campo => campo.Conta).ToList();
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var usuarioBancoDeDados = _context.Usuarios.FirstOrDefault(u => u.Id == id);

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
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            
            var usuarioDTO = _mapper.Map<UsuarioDTO>(usuario);

            return CreatedAtAction(nameof(GetById), new { Id = usuario.Id }, usuarioDTO);
        }

    }
}
