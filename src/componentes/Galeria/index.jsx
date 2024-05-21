import Titulo from '../Titulo'
import styled from 'styled-components'
import Foto from './Foto'
import { useContext, useEffect } from 'react'
import { ContextFotos } from '../../context/FotosContext'
import Populares from './Populares'

const GaleriaCountainer = styled.section`
    display: flex;
    flex-grow: 1;
    gap: 25px;

    @media (max-width: 780px) {
        flex-wrap: wrap;
        @media (max-width: 680px) {
            &, ul, div{
                align-items: center;
            justify-content: center;
        }
        }

    }
    
    & > div{
        display: flex;    
        flex-direction: column;
    }

    ul{
        list-style: none;
        padding: 0px;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
    }
`


const Galeria = () => {
    const { fotos, setFotos } = useContext(ContextFotos);

    return (
        <GaleriaCountainer>
            <div>
                <Titulo>Navegue pela galeria:</Titulo>
                <ul>
                    {
                        fotos.map((item) => <li key={item.id}>{
                            <Foto
                                fonte={item.fonte}
                                titulo={item.titulo}
                                path={item.path}
                                id={item.id}
                                tagId={item.tagId}
                                favoritado={item.favoritado}
                            />}</li>)
                    };
                </ul>
            </div>
            <Populares />
        </GaleriaCountainer>
    )
}

export default Galeria
