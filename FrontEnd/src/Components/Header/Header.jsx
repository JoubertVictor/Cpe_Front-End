import React from 'react';
import { HeaderStyle, Logo } from './Styles'

export function Header() {
  return (
    <HeaderStyle>
      <Logo src="src/Assents/Logo.png" alt='Logo'/>
    </HeaderStyle>
  );
}

export default Header;