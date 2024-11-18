import React from "react";
import {
  ProgressBar,
  ProgressBarContainer,
  SkillContainer,
  SkillLabel,
  SkillsList,
  SkillsSection,
  Title,
} from "./Skills.styles";

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "80%" },
  { name: "JavaScript", level: "85%" },
  { name: "React", level: "75%" },
  { name: "Git", level: "70%" },
];

function Skills() {
  return (
    <SkillsSection id="skills">
      <Title>Habilidades</Title>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillContainer key={index}>
            <SkillLabel>{skill.name}</SkillLabel>
            <ProgressBarContainer>
              <ProgressBar width={skill.level} />
            </ProgressBarContainer>
          </SkillContainer>
        ))}
      </SkillsList>
    </SkillsSection>
  );
}

export default Skills;
