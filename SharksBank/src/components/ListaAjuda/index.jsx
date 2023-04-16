import React, { useEffect } from 'react';
import styles from './index.module.css';
const ListaAjuda = (props) => {
    const perguntas = [{
        id: 0,
        pergunta: 'Quais são os requisitos para abrir uma conta?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    },
    {
        id: 1,
        pergunta: 'Quais serviços bancários estão disponíveis?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    },
    { id: 2,
        pergunta: 'Quais são as taxas e encargos associados às transações bancárias?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    },
    { id: 3,
        pergunta: 'Como posso acessar minha conta bancária digital?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    },
    { id: 4,
        pergunta: 'Como faço para bloquear ou cancelar meu cartão bancário digital se eu perder ou ele for roubado?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    },
    { id: 5,
        pergunta: 'Como faço para bloquear ou cancelar meu cartão bancário digital se eu perder ou ele for roubado?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    },
    { id: 6,
        pergunta: 'Como faço para bloquear ou cancelar meu cartão bancário digital se eu perder ou ele for roubado?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    },
    { id: 7,
        pergunta: 'Como faço para bloquear ou cancelar meu cartão bancário digital se eu perder ou ele for roubado?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    },
    { id: 8,
        pergunta: 'Como faço para bloquear ou cancelar meu cartão bancário digital se eu perder ou ele for roubado?',
        resposta: 'aaaaaaaaaaaaaaaaa'
    }
    ]

    return (
        <div >
            {perguntas.map((item, id) => (
            <div >
            <div >
                <h2 >{item.pergunta }</h2>
            </div>
            <div >
               {item.resposta}
            </div>
            </div>
            ))}
        </div>

        // return(
        //     <div>
        //         <label>{props.label}</label>
        //         <select>
        //             {props.itens.map(item => <option key={item}>{item}</option>)}
        //         </select>
        //     </div>
    )

}

export default ListaAjuda