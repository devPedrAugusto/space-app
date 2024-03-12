import React from 'react'
import styled from 'styled-components'
import CampoTexto from '../CampoTexto';

const Headerstylized = styled.header`
    padding: 60px 0;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 580px) {justify-content: center;}

    img{
      max-width: 302px;
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
