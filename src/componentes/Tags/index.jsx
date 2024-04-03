import React from 'react'
import styled from 'styled-components'
import tags from './tags.json'

const TagsCountainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px;
  color: white;
  align-items: center;
  gap: 10px;
`

const DivTag = styled.div`
  cursor: pointer;
  background-color: #D9D9D94D;
  padding: 8px 10px;
  border-radius: 10px;
  border: ${props => props.$ativo ? '2px solid' : 'none'};
  border-color:#C98CF1;

`;

const Tags = ({ titulo, idAtivo }) => {
  return (
    <TagsCountainer >
      <h3>{titulo}</h3>
      {tags.map((item) => {
        if(item.id === idAtivo)
          return <DivTag $ativo={true} key={item.id}>{item.titulo}</DivTag>
        return <DivTag $ativo={false} key={item.id}>{item.titulo}</DivTag>
      })}
    </TagsCountainer>
  )
}

export default Tags
