import { useState } from 'react'
import fotoJson from '../fotos.json'
import { createContext } from 'react'

export const ContextFotos = createContext();


export const FotosProvider = ({ children }) => {
    const [fotos, setFotos] = useState(fotoJson)
    const [fotoSelecionada, setFotoSelecionada] = useState()
    const [fotosFavoritas, setFotosFavoritas] = useState([]);

    return (
        <ContextFotos.Provider value={{
            fotos,
            setFotos,
            fotoSelecionada,
            setFotoSelecionada,
            fotosFavoritas,
            setFotosFavoritas
        }}>
            {children}
        </ContextFotos.Provider>
    )
}