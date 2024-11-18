import React from "react";
import styled from "styled-components";
import {
  Button,
  ContactSection,
  Form,
  Input,
  Textarea,
  Title,
} from "./Contact.styles";

function Contact() {
  return (
    <ContactSection id="contact">
      <Title>Contacto</Title>
      <Form>
        <Input type="text" placeholder="Nombre" required />
        <Input type="email" placeholder="Email" required />
        <Textarea placeholder="Mensaje" rows="5" required />
        <Button type="submit">Enviar</Button>
      </Form>
    </ContactSection>
  );
}

export default Contact;
