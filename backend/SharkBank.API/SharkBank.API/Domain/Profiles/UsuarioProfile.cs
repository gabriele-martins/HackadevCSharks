using AutoMapper;
using SharkBank.API.Domain.DTO;
using SharkBank.API.Domain.Models;

namespace SharkBank.API.Domain.Profiles
{
    public class UsuarioProfile: Profile
    {
        public UsuarioProfile () 
        {
            CreateMap<UsuarioDTO, Usuario> ();
            CreateMap<Conta, ContaDTO>().ForMember(contaDTO => contaDTO.Transacoes, opt => opt.MapFrom(conta => conta.Transacoes));
            CreateMap<Usuario, UsuarioDTO>().ForMember(usuarioDTO => usuarioDTO.Conta, opt => opt.MapFrom(usuario => usuario.Conta));
        }
    }
}
