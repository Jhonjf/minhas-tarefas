import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from '../../Utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)
  const tarefas = useSelector((state: RootReducer) => state.tarefas)

  const verifaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      if (valor === undefined) return 0
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      if (valor === undefined) return 0
      return tarefas.itens.filter((item) => item.status === valor).length
    }
    return 0 // Valor padrão se o critério não for reconhecido
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verifaEstaAtivo()

  return (
    <S.card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contarTarefas()}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.card>
  )
}

export default FiltroCard
