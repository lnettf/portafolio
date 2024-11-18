import React from "react";
import { FooterContainer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
    </FooterContainer>
  );
}

export default Footer;
