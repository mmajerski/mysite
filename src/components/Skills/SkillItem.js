import React from "react";
import styled from "styled-components";

const SkillStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: grayscale(100%);
  transition: 0.8s ease;

  &:hover {
    filter: grayscale(0%);
  }

  i {
  }

  img {
    width: ${(props) => props.theme.baseSkillImgSize};
    height: ${(props) => props.theme.baseSkillImgSize};

    @media (min-width: 576px) {
      width: ${(props) => props.theme._576_SkillImgSize};
      height: ${(props) => props.theme._576_SkillImgSize};
    }

    @media (min-width: 768px) {
      width: ${(props) => props.theme._768_baseSkillImgSize};
      height: ${(props) => props.theme._768_baseSkillImgSize};
    }

    @media (min-width: 992px) {
      width: ${(props) => props.theme._992_baseSkillImgSize};
      height: ${(props) => props.theme._992_baseSkillImgSize};
    }
  }

  small {
    margin-top: 20px;
    text-align: center;
    color: #ffffff;
    filter: brightness(86%);
    font-size: ${(props) => props.theme._576_smallTextBasic};

    @media (min-width: 576px) {
      font-size: ${(props) => props.theme._768_smallTextBasic};
    }

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme._992_smallTextBasic};
    }
  }
`;

const Skill = ({ img, title }) => {
  return (
    <SkillStyled>
      <img src={img} alt={title} />
      <small>{title}</small>
    </SkillStyled>
  );
};

export default Skill;
