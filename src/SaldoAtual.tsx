import React from 'react'
import { Transacao } from './Types'

interface SaldoAtualProps {
  transacoes: Transacao[]
}

const SaldoAtual: React.FC<SaldoAtualProps> = ({ transacoes }) => {
  const calcularSaldo = () => {
    return transacoes.reduce((saldo, transacao) => {
      return transacao.tipo === 'receita'
        ? saldo + transacao.valor
        : saldo - transacao.valor
    }, 0)
  }

  const saldo = calcularSaldo()
  const saldoClasse = saldo >= 0 ? 'saldo-positivo' : 'saldo-negativo'

  return (
    <div>
      <h2>Saldo Atual</h2>
      <p className={saldoClasse}>R${saldo.toFixed(2)}</p>
    </div>
  )
}

export default SaldoAtual
