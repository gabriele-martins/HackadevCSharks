using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SharkBank.API.Data.Context;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly DataContext _context;

       

        public UsuariosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            return _context.Usuarios.Include(campo => campo.Conta).ToList();
        }

    }
}
