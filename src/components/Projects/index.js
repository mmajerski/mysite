import React from "react";
import styled from "styled-components";

import ParticlesComponent from "../../config/particles";

import github from "../../img/githublogo.png";
import { projectItems } from "../../config/projectsConfig";
import ProjectItem from "./ProjectItem";

const StyledProjects = styled.div`
  padding: ${(props) => props.theme.smallPadding};
  margin-top: 100px;

  @media (min-width: 992px) {
    padding: ${(props) => props.theme.largePadding};
  }

  h1 {
    font-size: ${(props) => props.theme.h1BasicFontSize};
    z-index: 0;
    opacity: 0.1;
    color: #fafafa;

    @media (min-width: 576px) {
      font-size: ${(props) => props.theme.h1_576_fontSize};
    }

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.h1_768_fontSize};
    }

    @media (min-width: 992px) {
      font-size: ${(props) => props.theme.h1_992_fontSize};
      padding: ${(props) => props.theme.largePadding};
    }
  }

  .projectsContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .githubIcon {
    margin: 0 auto;
    margin-top: 3rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    transition: all 0.2s;
    animation: pulse 1.3s infinite;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1.1);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
    }

    60% {
      transform: scale(1);
      box-shadow: 0 0 0 1.5rem rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(1.1);
    }
  }
`;

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <h1>Projects</h1>
      <div className="projectsContent">
        {projectItems.map(({ title, stack, link }, i) => {
          return (
            <ProjectItem key={i} title={title} stack={stack} link={link} />
          );
        })}
      </div>
      <div className="githubIcon">
        <a
          href="https://github.com/userq11?tab=repositories"
          target="_blank"
          rel="noreferrer"
          title="https://github.com/userq11?tab=repositories"
        >
          <img src={github} alt="github logo" />
        </a>
      </div>
    </StyledProjects>
  );
};

export default Projects;
