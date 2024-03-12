import React from 'react'
import styled from 'styled-components'
import ItemNavegacao from './ItemNavegacao'

const ListStylized = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`

const ListaLateral = () => {
  return (
    <aside>
        <nav>
            <ListStylized>
                <ItemNavegacao
                    imgAtiva = 'icones/home-ativo.png'
                    imgInativa = 'icones/home-inativo.png'
                    ativo = {true}
                >Início
                </ItemNavegacao>
                <ItemNavegacao
                    imgAtiva = 'icones/mais-vistas-ativo.png'
                    imgInativa = 'icones/mais-vistas-inativo.png'
                >Mais vistas
                </ItemNavegacao>
                <ItemNavegacao
                    imgAtiva = 'icones/mais-curtidas-ativo.png'
                    imgInativa = 'icones/mais-curtidas-inativo.png'                
                >Mais curtidas
                </ItemNavegacao>
                <ItemNavegacao
                    imgAtiva = 'icones/novas-ativo.png'
                    imgInativa = 'icones/novas-inativo.png'                      
                >Novas
                </ItemNavegacao>
                <ItemNavegacao
                    imgAtiva = 'icones/surpreenda-me-ativo.png'
                    imgInativa = 'icones/surpreenda-me-inativo.png'                 
                >Surpreenda-me
                </ItemNavegacao>
            </ListStylized>
        </nav>
    </aside>
  )
}

export default ListaLateral
