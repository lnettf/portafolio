import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 50px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #282c34;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ProjectCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: left;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5em;
  color: #61dafb;
`;

export const ProjectDescription = styled.p`
  color: #555;
`;
