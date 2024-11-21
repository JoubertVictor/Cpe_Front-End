import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderStyle = styled.header`
  background: #ffe712;
  width: 100%;
  height: 138px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Logo = styled.img`
width: 250px;
height: auto;
margin-right: 10px;
`

export const LinkStyle = styled(Link)` 
  color: white;
  text-decoration: none;
`

export const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 2.5rem;      
  font-weight: bold;      
  text-align: center;     
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem`;