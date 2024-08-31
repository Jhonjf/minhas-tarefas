import * as S from './styles'

export type Props = {
  ativo: boolean
  contador: number
  legenda: string
}

const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.card>
)

export default FiltroCard
