import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 50px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #282c34;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  background-color: #61dafb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;
