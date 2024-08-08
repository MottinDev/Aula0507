import React from 'react'
import { Transacao } from './Types'

interface ListaTransacoesProps {
  transacoes: Transacao[]
  editarTransacao: (transacao: Transacao) => void
  deletarTransacao: (id: number) => void
}

const ListaTransacoes: React.FC<ListaTransacoesProps> = ({
  transacoes,
  editarTransacao,
  deletarTransacao,
}) => {
  return (
    <div>
      <h2>Lista de Transações</h2>
      <ul>
        {transacoes.map((transacao) => (
          <li key={transacao.id} className={transacao.tipo}>
            <h3>{transacao.descricao}</h3>
            <p>Tipo: {transacao.tipo}</p>
            <p className="valor">Valor: R${transacao.valor.toFixed(2)}</p>
            <button onClick={() => editarTransacao(transacao)}>Editar</button>
            <button onClick={() => deletarTransacao(transacao.id)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTransacoes
