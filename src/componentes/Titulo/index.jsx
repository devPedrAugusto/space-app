import React from 'react'
import styled from 'styled-components'

const TitleStylized = styled.h2`
    color: #7b78e6;
    font-size: 32px;
    text-align: ${props => props.$align? props.$align :'left'};
`

const Titulo = ({children, textAlign}) => {
  return (
    <TitleStylized $align = {textAlign}>
        {children}
    </TitleStylized>
  )
}

export default Titulo
