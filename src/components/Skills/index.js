import React from "react";
import styled from "styled-components";

import SkillItem from "./SkillItem";

import ParticlesComponent from "../../config/particles";

const StyledSkills = styled.div`
  padding: ${(props) => props.theme.smallPadding};
  margin-top: 0px;
  margin-bottom: 100px;

  @media (min-width: 992px) {
    margin-top: -100px;
    margin-bottom: 200px;
  }

  h1 {
    font-size: ${(props) => props.theme.h1BasicFontSize};
    z-index: 0;
    opacity: 0.1;
    text-align: right;
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

  .skillsInfo {
    max-width: 900px;
    background-color: #252627;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.25);
    padding: 25px;

    @media (min-width: 992px) {
      position: relative;
      top: -40px;
      left: 50%;
      right: 50%;
      transform: translate(-50%);
      z-index: 1;
    }

    h2 {
      font-size: ${(props) => props.theme.skillTitleBasicFont};
      color: ${(props) => props.theme.blueText};
      text-align: center;
      margin-bottom: 50px;

      @media (min-width: 576px) {
        font-size: ${(props) => props.theme._576_skillTitleBasicFont};
      }

      @media (min-width: 768px) {
        font-size: ${(props) => props.theme._768_skillTitleBasicFont};
      }

      @media (min-width: 992px) {
        font-size: ${(props) => props.theme._992_skillTitleBasicFont};
      }
    }

    .sideExp {
      font-size: ${(props) => props.theme.skillTitleBasicFont};
      color: ${(props) => props.theme.greenText};
      text-align: center;
      margin-bottom: 50px;

      @media (min-width: 576px) {
        font-size: ${(props) => props.theme._576_skillTitleBasicFont};
      }

      @media (min-width: 768px) {
        font-size: ${(props) => props.theme._768_skillTitleBasicFont};
      }

      @media (min-width: 992px) {
        font-size: ${(props) => props.theme._992_skillTitleBasicFont};
      }
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;

      @media (min-width: 992px) {
        gap: 60px;
      }

      .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        filter: grayscale(100%);

        &:hover {
          cursor: pointer;
          filter: grayscale(0%);
        }
      }
    }
  }
`;

const Skills = ({ skills, sideExp }) => {
  return (
    <StyledSkills id="skills" sideExp>
      <h1>Skills</h1>
      <div className="skillsInfo">
        <h2 className={sideExp ? "sideExp" : ""}>
          {sideExp ? "Side Experience" : "Main Experience"}
        </h2>
        <div className="container">
          {skills.map((skill) => {
            return (
              <SkillItem
                key={skill.title}
                title={skill.title}
                img={skill.img}
              />
            );
          })}
        </div>
      </div>
    </StyledSkills>
  );
};

export default Skills;
