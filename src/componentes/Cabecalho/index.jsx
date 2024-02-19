import React from 'react'
import styled from 'styled-components'
import CampoTexto from '../CampoTexto';

const Headerstylized = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
  img{
    max-width: 212px;
  }
`;

const Cabecalho = () => {
  return (
    <Headerstylized>
      <img src="/imagens/logo.png" alt="Logo Space app" />
      <CampoTexto/>
    </Headerstylized>
  )
}

export default Cabecalho
