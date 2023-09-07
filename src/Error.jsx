import React from 'react'
import { styled } from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
  <Wrapper>
    <img className="Error-img" src="../images/error.svg" alt="error"/>
    <NavLink to="/">
        <Button className='btn'>Go Back</Button>
    </NavLink>
    
</Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    display: flex;
    justify-content: center ;
    align-items: center;
    flex-direction: column;
    gap: 5rem;

    .Error-img{
        max-width: 50rem;
        
        
    };

    .btn{
        font-size: 1.8rem;
    
        margin-right:30rem
    }
`


export default Error
