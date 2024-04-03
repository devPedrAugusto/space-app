import React from 'react'
import Titulo from '../../Titulo'
import imgPopulares from './fotos-populares.json'
import styled from 'styled-components'

const SectionStylized = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    ul{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

    }

    li img{
      box-shadow: 8px 6px 15px #00000037;
      border-radius: 20px;
    }

    @media (max-width: 780px){
        li img{
          width: 288px;
        }
    }

  `
  const BotaoStylized = styled.button`
    box-shadow: 8px 6px 15px #00000037;
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
  `;

const Populares = () => {
  return (
    <SectionStylized>
      <Titulo>Populares</Titulo>
      <ul>
        {imgPopulares.map((img) => <li key={img.id}><img src={img.path}/></li>)}
        <BotaoStylized>Ver mais</BotaoStylized>
      </ul>
    </SectionStylized>
  )
}

export default Populares
