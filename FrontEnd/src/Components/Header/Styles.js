import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderStyle = styled.header`
  background: #3f51b5;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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