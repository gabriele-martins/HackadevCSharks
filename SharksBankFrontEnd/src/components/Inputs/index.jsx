import React, { useEffect } from 'react';
import styles from './index.module.css';
import { Mascara } from '../../util/tipoMascara';

export function CampoInput({
	nome,
	idNome,
	campoReferencia,
	labelNome,
	register,
	errors,
	obrigatorio,
	padrao,
	tamanhoMax,
	tamanhoMin,
	desabilitar,
	tipo,
	placeholder,
	mascara,
}) {
	function handleOnInput(e) {
		let value = e.target.value;
		switch (mascara) {
			case Mascara.ValorMonetario:
				e.target.value = replaceValorMonetario(value);
				break;
			case Mascara.CPF:
				e.target.value = replaceCpf(value);
				break;
			default:
				e.target.value = value;
				break;
		}
	}

	function replaceValorMonetario(value) {
		value = value.replace(/\D/g, '');
		value = value.replace(/(\d)(\d{2})$/, '$1,$2');
		// value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
		return value;
	}

	function replaceCpf(value) {
		value = value.replace(/\D/g, '');
		value = value.replace(/(\d{3})(\d)/, '$1.$2');
		value = value.replace(/(\d{3})(\d)/, '$1.$2');
		value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
		return value;
	}

	return (
		<div className={styles.containerInput}>
			<label htmlFor={idNome}>{labelNome}</label>
			<input
				onInput={handleOnInput}
				type={tipo}
				placeholder={placeholder}
				name={nome}
				disabled={desabilitar}
				maxLength={tamanhoMax}
				id={idNome}
				{...register(campoReferencia, {
					required: obrigatorio,
					pattern: padrao,
					minLength: tamanhoMin,
				})}
			/>
			{obrigatorio && errors[campoReferencia]?.type === 'required' && (
				<span> Campo obrigatório! </span>
			)}
			{errors[campoReferencia]?.type === 'pattern' && (
				<span> {labelNome || placeholder} inválido(a) </span>
			)}
			{errors[campoReferencia]?.type === 'minLength' && (
				<span> Tamanho mínimo: {tamanhoMin} </span>
			)}
		</div>
	);
}
