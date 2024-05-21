import React, { useContext, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import expandirIcon from '/icones/expandir.png'
import favorito from '/icones/favorito.png'
import favoritoAtivo from '/icones/favorito-ativo.png'
import { ContextFotos } from '../../../context/FotosContext'
import { useFavoritos } from '../../../hooks/useFavoritos'


const FigureStylized = styled.figure`
    box-shadow: 8px 6px 15px #00000037;
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 20px 20px 20px 20px;
    background-color: #001634;

    & > img{
        border-radius: 20px 20px 0px 0px;}

    figcaption{
        color: white;
        padding: 10px;
        box-sizing: border-box;
        padding: 12px;

        footer{
            display: flex;
        }

        h3{
            font-family: "GandhiSansBold";
        }


            h4{flex-grow: 1;}

            h4,
            h3{
                margin: 0;
                font-size: 16px;
            }
        
    }
`;

const ButtonCountainer = styled.div`
    display: flex;

    button{
        cursor: pointer;
        background: none;
        border: none;
    }
`;




const Foto = ({ titulo, fonte, path, id, tagId, favoritado }) => {
    const { aoAlterar } = useFavoritos();
    const { fotoSelecionada, setFotoSelecionada, fotos, setFotos } = useContext(ContextFotos);

    return (
        <FigureStylized>
            <img src={path} alt={fonte} />
            <figcaption>
                <h3>{titulo}</h3>
                <footer>
                    <h4>{fonte}</h4>
                    <ButtonCountainer>
                        <button onClick={() => aoAlterar(id)}>
                            <img src={favoritado ? favoritoAtivo : favorito} alt="" />
                        </button>
                        <button onClick={() => fotoSelecionada ? setFotoSelecionada() : setFotoSelecionada({ titulo, fonte, path, id, tagId, favoritado })} >
                            <img src={expandirIcon} alt="" />
                        </button>
                    </ButtonCountainer>
                </footer>
            </figcaption>
        </FigureStylized>

    )
}

export default Foto
