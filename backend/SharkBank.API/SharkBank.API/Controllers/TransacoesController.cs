using AutoMapper;
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
        private readonly IMapper _mapper;

        public TransacoesController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
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
        public async Task<ActionResult<List<Transacao>>> Post(CriarTransferenciaDTO requisicaoOrigem)
        {
            var contaOrigem = await _context.Contas.FindAsync(requisicaoOrigem.ContaId);
            var contaDestino = await _context.Contas.FindAsync(requisicaoOrigem.ContaIdDestino);
            var usuarioOrigem =  await _context.Usuarios.Where(c => c.ContaId == requisicaoOrigem.ContaId).FirstOrDefaultAsync();
            var usuarioDestino = await _context.Usuarios.Where(c => c.ContaId == contaDestino.Id).FirstOrDefaultAsync();
            if (contaOrigem == null)
            {
                return NotFound("Conta de origem não encontrada"); 
            }
            if (contaDestino == null)
            {
                return NotFound("Conta de destino não encontrada"); 
            }

            var novaTransacaoOrigem = new Transacao
            {
                Data = DateTime.Now,
                Valor = requisicaoOrigem.Valor,
                Tipo = requisicaoOrigem.Tipo,
                IsEnviada = true,
                Conta = contaOrigem
            };

            var novaTransacaoDestino = new Transacao
            {
                Data = DateTime.Now,
                Valor = requisicaoOrigem.Valor,
                Tipo = Domain.Models.Enums.TipoTransacao.TRANSFERENCIARECEBIDA,
                IsEnviada = true,
                Conta = contaDestino
            };

            contaOrigem.Saldo -= requisicaoOrigem.Valor;
            contaDestino.Saldo += requisicaoOrigem.Valor;
            _context.Transacoes.Add(novaTransacaoOrigem);
            _context.Transacoes.Add(novaTransacaoDestino);

            var comprovante = new ComprovanteDTO
            {
                Data = DateTime.Now.Date,
                Valor = requisicaoOrigem.Valor,
                UsuarioDestino = _mapper.Map<UsuarioReduzidoDTO>(usuarioDestino),
                UsuarioOrigem = _mapper.Map<UsuarioReduzidoDTO>(usuarioOrigem)
            }; 
            await _context.SaveChangesAsync();
            return Ok(comprovante);
        }
    }
}
