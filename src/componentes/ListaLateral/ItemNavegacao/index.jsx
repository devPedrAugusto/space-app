import styled from "styled-components"

const ListItemStylized = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo? '#7B78E5':'#D9D9D9'};
    font-family: ${ props => props.$ativo? 'GandhiSansBold':''};
    display: flex;
    align-items: center;
    img{
      margin-right: 10px;
    }
`;

const ItemNavegacao = ({children, imgAtiva, imgInativa, ativo = false}) => {
  return (
    <ListItemStylized $ativo={ativo}>
        <img src={ativo? imgAtiva:imgInativa} alt="" />
        {children}
    </ListItemStylized>
  )
}

export default ItemNavegacao
