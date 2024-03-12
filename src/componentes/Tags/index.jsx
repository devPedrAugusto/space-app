import React from 'react'
import styled from 'styled-components'

const TagsCountainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0px;
    color: white;
    align-items: center;
    gap: 10px;
    div{
      cursor: pointer;
      background-color: #D9D9D94D;
      padding: 8px 10px;
      border-radius: 10px;
      border: ${ props => props.$ativo? '2px solid' : 'none'};
      border-image: linear-gradient(to right, #C98CF1, #7B78E5)1;
    }
`
;

const Tags = ({titulo, tags, ativo = false}) => {
  return (
    <TagsCountainer $ativo = {ativo}>
      <h3>{titulo}</h3>
      {tags.map((item) => <div key={item}>{item}</div>)}
    </TagsCountainer>
  )
}

export default Tags
