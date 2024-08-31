import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas' // ajuste conforme necessário
import EstiloGlobal, { Container } from './styles' // ajuste conforme necessário

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
