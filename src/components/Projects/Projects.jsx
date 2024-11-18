import React from "react";
import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectList,
  ProjectsSection,
  ProjectTitle,
  Title,
} from "./Projects.styles";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "https://dummyimage.com/300x200/61dafb/ffffff&text=Proyecto+1",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: "https://dummyimage.com/300x200/61dafb/ffffff&text=Proyecto+2",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: "https://dummyimage.com/300x200/61dafb/ffffff&text=Proyecto+3",
  },
];

function Projects() {
  return (
    <ProjectsSection id="projects">
      <Title>Proyectos</Title>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
}

export default Projects;
