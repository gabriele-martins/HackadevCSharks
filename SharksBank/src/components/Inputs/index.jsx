import React, { useEffect } from 'react';
import styles from './index.module.css';

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
	placeholder
}) {
	return (
		<div className={styles.containerInput}>
			<label htmlFor={idNome}>{labelNome}</label>
			<input
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
				<span> {labelNome} inválido(a) </span>
			)}
			{errors[campoReferencia]?.type === 'minLength' && (
				<span> Tamanho mínimo: {tamanhoMin} </span>
			)}
		</div>
	);
}
