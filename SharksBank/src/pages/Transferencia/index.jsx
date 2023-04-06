import React from 'react';
import { useForm } from 'react-hook-form';

import { Conteudo } from '../../components/Conteudo';
import { Botao } from '../../components/Botao';

import styles from './index.module.css';

export default function Transferencia() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<Conteudo
			conteudoPainelEsquerdo={<div className={styles.infoConta}></div>}
		>
			<form
				className={styles.formularioTransferencia}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div>
					<label htmlFor="trasferencia-cpf-input">CPF</label>
					<input
						id="trasferencia-cpf-input"
						{...register('cpf', {
							required: true,
							pattern: /^[0-9]*$/,
						})}
					/>
					{errors.cpf?.type === 'required' && (
						<span> Campo obrigatório! </span>
					)}
					{errors.cpf?.type === 'pattern' && (
						<span> CPF inválido </span>
					)}
				</div>

                <div>
					<label htmlFor="trasferencia-valor-input">Valor</label>
					<input
						id="trasferencia-valor-input"
						{...register('valor', {
							required: true,
							pattern: /^[0-9]*$/,
						})}
					/>
					{errors.valor?.type === 'required' && (
						<span> Campo obrigatório! </span>
					)}
					{errors.valor?.type === 'pattern' && (
						<span> Valor inválido </span>
					)}
				</div>

				<Botao type="submit" nome={'Enviar'} />
			</form>
		</Conteudo>
	);
}
