import React from 'react'
import imgBanner from '../../assets/Banner.png'
import styled from 'styled-components'

const BannerStylized = styled.div`
  background-image: url(${imgBanner});
  flex-grow: -1;
  max-width: 1195px;
  margin: 0;
  height: 328px;
  display: flex;
  background-size: cover;
  align-items: center;
  border-radius: 10px;
  h1{
    color: white;
    max-width: 280px;
    margin-left: 50px;
  }
`;

const Banner = () => {
  return (
    <BannerStylized>
      <h1>A galeria mais completa de fotos do espaço!</h1>
    </BannerStylized>
  )
}

export default Banner
