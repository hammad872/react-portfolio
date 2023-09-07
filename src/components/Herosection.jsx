import React from 'react';
import { styled } from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import {useGlobalContext } from '../context'


const Herosection =() => {
  const { name, image, para} = useGlobalContext();
  return ( 
  <Wrapper>
   <div className="cont>ainer grid grid-two-column">
    <div className="section-hero-data">
        <p className='hero-top-data'>This is </p>
        <h1 className='hero-heading'>{name}</h1>
        <p className='hero-para'>{para}</p>
        <Button className='btn hireme-btn'>
        <NavLink to="/contact">Hire Us</NavLink>
    </Button>


    </div>

    <div className="section-hero-image"></div>
    <picture>
        <img src ={image} alt='' className='hero-img'/>
    </picture>
   </div>
  </Wrapper>
  )


};

const Wrapper = styled.section`
padding: 9rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 16rem;
}

.hero-top-data {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;
  margin-left: 30rem;
  color: ${({ theme }) => theme.colors.helper};
}

.hero-heading {
  text-transform: uppercase;
  font-size: 4rem;
  justify-content: center;
  margin-left: 30rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  margin-left: 30rem;
  max-width: 30rem;
  text-align: justify;
}

.section-hero-image {
  display: flex;
  justify-content: center;
  margin-left: 40rem;
  align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  max-width: 30rem;
 margin-left: 80rem;
 position: relative;
  top: -320px;
 
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem
  }
}
`;


export default Herosection
