import React from 'react'
import styled from 'styled-components'

const BannerStylized = styled.div`
  background-image: url(${props => props.$imgBanner});
  width: 100%;
  height: 328px;
  margin: 0;
  display: flex;
  background-size: cover;
  background-position: center;
  align-items: center;
  border-radius: 10px;
  
  @media(max-width: 680px){
    height: 228px;
    width: 95%;
    margin: auto;
  }

  h1{
    color: white;
    max-width: 280px;
    margin-left: 50px;
  }
`;

const Banner = ({children, imgBanner}) => {
  return (
    <BannerStylized $imgBanner = {imgBanner}>
      {children}
    </BannerStylized>
  )
}

export default Banner
