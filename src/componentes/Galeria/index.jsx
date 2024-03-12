import React from 'react'
import Titulo from '../Titulo'
import styled from 'styled-components'
import Foto from './Foto'

const GaleriaCountainer = styled.section`
    display: flex;

    @media (max-width: 680px) {
        flex-wrap: wrap;
        &, & > div, ul{
            align-items: center;
            justify-content: center;
        }

    }
    & > div{
        @media (min-width: 680px) {align-items: start;}
        display: flex;    
        flex-direction: column;
    }

    ul{
        list-style: none;
        padding: 0px;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;

        @media(max-width: 680px){
        }
    }
`

const Galeria = ({ fotos }) => {

    return (
        <GaleriaCountainer classname='galeria'>
            <div>
                <Titulo textAlign='center'>Navegue pela galeria:</Titulo>
                <ul>
                    {fotos.map((item) => <li>{<Foto
                        titulo={item.titulo}
                        fonte={item.fonte}
                        path={item.path}
                        id={item.id}
                        tagId={item.tagId}
                    />}</li>)}
                </ul>
            </div>
                <Titulo textAlign='center'>Populares</Titulo>
        </GaleriaCountainer>
    )
}

export default Galeria
