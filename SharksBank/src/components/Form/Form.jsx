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

  const registrarUsuario = (data) => {
    console.log(data);
    navigate("/saldo");
  };

/* 
  const genero = [
    {label: "Masculino", value="Masculino"},
    {label: "Feminino", value:"Feminino"},
    {label: "Outro", value:"Outro"}
  ]; 
  
  Datapicker -> Calendario 
  
  */

  function getValuesSelect(inicial, final){
   let anos = [];
   for (let i = inicial; i <= final; i++) {
     anos.push(i);
   }
   return anos;
}

let selectAnos = getValuesSelect(1900, 2023);
let selectDias = getValuesSelect(1, 31);
 
  return (
    <>
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
            name={"E-mail"}
            placeholder={"E-mail"}
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
            {selectDias.map((dia) => <option value={dia}>{dia}</option>)}
            </select>
            <select
              name="mesNascimento"
              id="mes"
              {...register("mesNascimento")}
            >
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">Julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
            <select
              name="anoNascimento"
              id="ano"
              {...register("anoNascimento")}
            >
            {selectAnos.map((ano) => <option value={ano}>{ano}</option>)}
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
        <hr />
        <SubmitButton type={"Submit"} text={"Cadastre-se"} id={"cadastro"} />
      </form>
    </>
  );
}
