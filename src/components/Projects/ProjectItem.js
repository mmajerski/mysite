import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 18rem;
  height: 14rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  position: relative;
  border-radius: 0.3rem;
  margin: 2rem;

  @media (min-width: 992px) {
    width: 24rem;
    height: 18rem;
  }

  @media (min-width: 1394px) {
    width: 26rem;
    height: 20rem;
  }

  .projectDesc {
    height: 80%;
    width: 90%;
    transition: all 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    .projectDescTitle {
      font-size: 1rem;
      color: #fff;
      filter: brightness(86%);

      @media (min-width: 576px) {
        font-size: 1.25rem;
      }

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }

      @media (min-width: 992px) {
        font-size: 1.8rem;
      }

      @media (min-width: 1200px) {
        font-size: 2rem;
      }
    }

    .projectDescStack {
      letter-spacing: 2px;
      word-spacing: 5px;
      font-size: 0.6rem;
      color: ${(props) => props.theme.blueText};
      margin-top: -20px;

      @media (min-width: 576px) {
        letter-spacing: 2.3px;
        word-spacing: 6.7px;
        font-size: 0.65rem;
      }

      @media (min-width: 768px) {
        letter-spacing: 2.6px;
        word-spacing: 8px;
        font-size: 0.72rem;
      }

      @media (min-width: 992px) {
        letter-spacing: 3px;
        word-spacing: 10px;
        font-size: 0.8rem;
      }

      @media (min-width: 1200px) {
        letter-spacing: 3.3px;
        word-spacing: 12px;
        font-size: 1rem;
      }
    }
  }

  .btnContainer {
    a {
      text-decoration: none;
      text-transform: uppercase;
      position: relative;
      top: 20%;
      bottom: 50%;
      transform: translateY(-50%);

      padding: 12px 25px;
      background-color: none;
      border: 3px solid ${(props) => props.theme.greenText};
      color: ${(props) => props.theme.greenText};
      font-size: 0.8rem;
      letter-spacing: 2px;

      @media (min-width: 576px) {
        font-size: 1rem;
      }

      @media (min-width: 768px) {
        font-size: 1.1rem;
      }

      @media (min-width: 992px) {
        font-size: 1.2rem;
      }

      @media (min-width: 1200px) {
        font-size: 1.4rem;
      }

      &:hover {
        color: #fff;
      }

      &::before {
        content: "";
        background-color: ${(props) => props.theme.greenText};
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0%;
        z-index: -1;
        transition: 0.5s;
      }

      &:hover::before {
        height: 100%;
      }
    }
  }
`;

const ProjectItem = ({ title, stack, link }) => {
  return (
    <StyledItem>
      <div className="projectDesc">
        <p className="projectDescTitle">{title}</p>
        <p className="projectDescStack">{stack}</p>
        <div className="btnContainer">
          <a href={link} target="_blank" rel="noreferrer">
            Link
          </a>
        </div>
      </div>
    </StyledItem>
  );
};

export default ProjectItem;
