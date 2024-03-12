import React from 'react'
import styled from 'styled-components'

const InputTextStylized = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid;
    margin: 30px 0px;
    border-image: linear-gradient(to right, #C98CF1, #7B78E5)1;
        input{
        background: transparent;
        border: none;
        color: white;
        width: 100%;
        height: 100%;
    }
    img{
        pointer-events: none;
        margin-left: -30px;
    }

`;

const CampoTexto = () => {
    return (
        <InputTextStylized>
            <input type="text" placeholder='O que você procura ?'/>
            <img src="/icones/search.png" alt="Icone de Lupa"/>
        </InputTextStylized>
    )
}

export default CampoTexto
