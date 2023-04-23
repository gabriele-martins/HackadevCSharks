import React from "react";
import { useForm } from "react-hook-form";
import style from "./form.module.css";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Radio from "./Radio";
import { useNavigate } from "react-router-dom";

export function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registrarUsuario = async (data) => {
    console.log(data);
    let nome = data.Nome;
    let email = data.Email;
    let celular = data.Celular;
    let senha = data.Senha;
    let dataNascimento = `${data.anoNascimento}-${data.mesNascimento}-${data.diaNascimento}`;
    let cpf = data.CPF;
    let genero = "OUTROS";
    await fetch("https://sharksbankbackend.up.railway.app/api/Usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        celular,
        cpf,
        senha,
        dataNascimento,
        genero,
      }),
    });
     navigate("/login");
  };

  /* 
  const genero = [
    {label: "Masculino", value="Masculino"},
    {label: "Feminino", value:"Feminino"},
    {label: "Outro", value:"Outro"}
  ]; 
  
  Datapicker -> Calendario 
  
  */

  function getValuesSelect(inicial, final) {
    let anos = [];
    let resultado = "";
    for (let i = inicial; i <= final; i++) {
      if (i < 10) {
        resultado = "0" + i;
      } else {
        resultado = i + "";
      }
      anos.push(resultado);
    }
    return anos;
  }

  let selectAnos = getValuesSelect(1900, 2023);
  let selectDias = getValuesSelect(1, 31);

  return (
    <div className={style.cadastroFormDiv }>
      <form onSubmit={handleSubmit(registrarUsuario)}>
        <Input
          type={"text"}
          name={"Nome"}
          placeholder={"Nome completo"}
          register={register}
          errors={errors}
        />
        <div className={style.outrosDados}>
          <Input
            type={"email"}
            name={"Email"}
            placeholder={"Email"}
            register={register}
            errors={errors}
          />
          <Input
            type={"text"}
            name={"Celular"}
            placeholder={"Celular"}
            register={register}
            errors={errors}
          />
          <Input
            type={"text"}
            name={"CPF"}
            placeholder={"CPF"}
            register={register}
            errors={errors}
          />
          <Input
            type={"password"}
            name={"Senha"}
            placeholder={"Nova senha"}
            register={register}
            errors={errors}
          />
        </div>
        <div className={style.selectRadioTitle}>
          <div>Data de nascimento</div>
          <div className={style.selectRadioFlex}>
            <select
              name="diaNascimento"
              id="dia"
              {...register("diaNascimento")}
            >
              {selectDias.map((dia) => (
                <option value={dia}>{dia}</option>
              ))}
            </select>
            <select
              name="mesNascimento"
              id="mes"
              {...register("mesNascimento")}
            >
              <option value="01">Janeiro</option>
              <option value="02">Fevereiro</option>
              <option value="03">Março</option>
              <option value="04">Abril</option>
              <option value="05">Maio</option>
              <option value="06">Junho</option>
              <option value="07">Julho</option>
              <option value="08">Agosto</option>
              <option value="09">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
            <select
              name="anoNascimento"
              id="ano"
              {...register("anoNascimento")}
            >
              {selectAnos.map((ano) => (
                <option value={ano}>{ano}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={style.selectRadioTitle}>
          <div>Gênero</div>
          <div className={style.selectRadioFlex}>
            <Radio id={"fem"} value={"1"} text={"Feminino"} />
            <Radio id={"masc"} value={"2"} text={"Masculino"} />
            <Radio id={"outros"} value={"3"} text={"Outros"} />
          </div>
        </div>
        {/* <hr /> */}
        <SubmitButton type={"Submit"} text={"Cadastre-se"} id={"cadastro"} />
      </form>
    </div>
  );
}
