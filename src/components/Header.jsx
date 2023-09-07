import React from 'react'
import  Navbar  from './Navbar'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src='./images/logo2.png' alt='logo' className='logo' />
      </NavLink>
      <Navbar />
    </MainHeader>

  );
};

const MainHeader = styled.header`
   padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
   display: flex;
  justify-content: space-between;
  align-items: center; 

  .logo {
    height: auto;
    max-width: 10;
  }
`;


export default Header
