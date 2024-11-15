import { HeaderStyle, LinkStyle, Title, Nav } from './Styles'

export function Header() {
  return (
    <HeaderStyle>
      <Title>CPE Header</Title>
      <Nav>
        <LinkStyle to="/">Início</LinkStyle>
        <LinkStyle to="/sobre">Sobre</LinkStyle>
      </Nav>
    </HeaderStyle>
  )
}