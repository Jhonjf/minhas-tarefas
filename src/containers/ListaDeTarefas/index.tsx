import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioriade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Pagar conta da internet',
    descricao: 'Baixar fatura no Gmail',
    prioriade: 'Urgente',
    status: 'Concluida'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer o treino B',
    prioriade: 'Importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo; </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioriade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
