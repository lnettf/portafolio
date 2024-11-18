import React from "react";
import { AboutSection, Description, ProfileImage, Title } from "./About.styles";

function About() {
  return (
    <AboutSection id="about">
      <ProfileImage
        src="https://dummyimage.com/150x150/61dafb/ffffff&text=Foto"
        alt="Foto de perfil"
      />
      <Title>Sobre mí</Title>
      <Description>
        Soy un desarrollador frontend apasionado por crear experiencias web
        atractivas y funcionales. Me especializo en tecnologías como React, CSS
        y JavaScript.
      </Description>
    </AboutSection>
  );
}

export default About;
