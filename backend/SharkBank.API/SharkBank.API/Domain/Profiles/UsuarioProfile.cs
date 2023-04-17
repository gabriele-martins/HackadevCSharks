using AutoMapper;
using SharkBank.API.Domain.DTO;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Profiles
{
    public class UsuarioProfile: Profile
    {
        public UsuarioProfile () 
        {
            CreateMap<Usuario, UsuarioDTO>();
            CreateMap<Transacao, TransacaoDTO>();
            CreateMap<Conta, ContaDTO>()
                .ForMember(dest => dest.Transacoes, opt => opt.MapFrom(src => src.Transacoes));
        }
    }
}
