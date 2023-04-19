using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using SharkBank.API.Data.Context;
using SharkBank.API.Domain.DTO;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransacoesController : ControllerBase
    {
        private readonly DataContext _context;

        public TransacoesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Transacao>>> Get(int contaId)
        {
            var conta = await _context.Contas.FirstOrDefaultAsync(c => c.Id == contaId);
            if (conta == null)
            {
                return NotFound("Conta não existe");
            }
            var transacoes = await _context.Transacoes
                .Where(t => t.ContaId == contaId)
                .ToListAsync(); 
            return transacoes;
        }

        [HttpPost]

        public async Task<ActionResult<List<Transacao>>> Post(CriarTransferenciaDTO requisicao)
        {
            var conta = await _context.Contas.FindAsync(requisicao.ContaId);
            if (conta == null)
            {
                return NotFound("Usuário não encontrado"); 
            }

            var novaTransacao = new Transacao
            {
                Data = DateTime.Now,
                Valor = requisicao.Valor,
                Tipo = requisicao.Tipo,
                IsEnviada = true,
                Conta = conta
            }; 
            _context.Transacoes.Add(novaTransacao);
            await _context.SaveChangesAsync();
            return await Get(novaTransacao.ContaId);
        }
    }
}
