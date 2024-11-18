import React from "react";
import { HeaderContainer, Nav, Title } from "./Header.styles";

function Header() {
  return (
    <HeaderContainer>
      <Title>Mi Portafolio</Title>
      <Nav>
        <ul>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
