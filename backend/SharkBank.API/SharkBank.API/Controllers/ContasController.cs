using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SharkBank.API.Data.Context;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContasController : ControllerBase
    {
            private readonly DataContext _context;

            public ContasController(DataContext context)
            {
                _context = context;
            }

            
    }
}

