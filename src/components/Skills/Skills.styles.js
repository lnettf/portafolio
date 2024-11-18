import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 50px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #282c34;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SkillLabel = styled.span`
  font-size: 1.2em;
  color: #555;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
`;

export const ProgressBar = styled.div`
  height: 20px;
  background-color: #61dafb;
  width: ${(props) => props.width || "0%"};
  transition: width 0.3s ease-in-out;
`;
