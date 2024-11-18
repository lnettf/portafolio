import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #282c34;
`;

export const Description = styled.p`
  font-size: 1.2em;
  color: #555;
  max-width: 600px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;
