import React, { useContext, useEffect } from 'react'
import { ContextFotos } from '../../context/FotosContext';
import Foto from '../Galeria/Foto';
import styled from 'styled-components';


const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    `

const DialogStylized = styled.dialog`
    position: absolute;
    top: 294px;
    width: 55vw;
    background: transparent;
    padding: 0;
    border: 0;
`
const ModalZoom = () => {
    const { fotoSelecionada, setFotoSelecionada } = useContext(ContextFotos);

    return (
        <>
            {fotoSelecionada &&
                <>
                <Overlay/>               
                <DialogStylized open={!!fotoSelecionada}>
                    <Foto
                        titulo={fotoSelecionada.titulo}
                        fonte={fotoSelecionada.fonte}
                        path={fotoSelecionada.path}
                        id={fotoSelecionada.id}
                        tagId={fotoSelecionada.tagId}
                    />
                </DialogStylized>
                </>}
        </>
    )
}

export default ModalZoom;