import React from 'react'
import styled from 'styled-components'

const InputTextStylized = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid;
    margin: 15px 0;
    border-image: linear-gradient(to right, #C98CF1, #7B78E5)1;
    input{
        max-width: 602px;
        background: transparent;
        border: none;
        padding: 12px 18px;
        /*background-repeat: no-repeat;
        background-image: url('public/icones/search.png');
        background-position: center right;
        background-size: 30px;*/
    }
    img{
        position: absolute;
        right: 10px;
    }
`;

const CampoTexto = () => {
    return (
        <InputTextStylized>
            <input type="text" placeholder='O que você procura ?'/>
            <img src="/icones/search.png" alt=""/>
        </InputTextStylized>
    )
}

export default CampoTexto
