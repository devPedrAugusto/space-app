import styled from "styled-components"
import EstilosGlobais from "./componentes/EstiloGlobais"
import Cabecalho from "./componentes/cabecalho"
import ListaLateral from "./componentes/ListaLateral"
import Banner from "./componentes/Banner"

function App() {

  const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;`

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Cabecalho/>
      <ListaLateral/>
      <Banner/>
    </FundoGradiente>
  )
}

export default App
