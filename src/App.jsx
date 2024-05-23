import styled from "styled-components"
import EstilosGlobais from "./componentes/EstiloGlobais"
import Cabecalho from "./componentes/Cabecalho"
import ListaLateral from "./componentes/ListaLateral"
import Banner from "./componentes/Banner"
import imgBanner from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import Tags from "./componentes/Tags"
import ModalZoom from "./componentes/ModalZoom"
import { FotosProvider } from "./context/FotosContext"

const FundoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;`

const AppCountainer = styled.main`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainCountainer = styled.section`
  display: flex;
  gap: 50px;
  
  @media (max-width: 680px){flex-wrap: wrap;}
`;

const ColumnCountainer = styled.section`
  display: flex;
  flex-direction: column;
  @media(max-width: 680px){
    margin: 10px;
  }
`




function App() {

  return (
    <FundoGradiente>
      <FotosProvider>
        <EstilosGlobais />
        <AppCountainer>
          <Cabecalho />
          <MainCountainer>
            <ListaLateral />
            <ColumnCountainer>
              <Banner imgBanner={imgBanner}>
                <h1>A galeria mais completa de fotos do espaço!</h1>
              </Banner>
              <Tags titulo='Busque por tags:' idAtivo={0} />
              <Galeria />
            </ColumnCountainer>
          </MainCountainer>
        </AppCountainer>
        <ModalZoom />
      </FotosProvider>
    </FundoGradiente>
  )
}

export default App
