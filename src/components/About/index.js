import React from "react";
import styled from "styled-components";

import pattern from "../../img/pattern.png";

const StyledAbout = styled.div`
  padding: ${(props) => props.theme.smallPadding};
  margin-top: 100px;

  /* @media (min-width: 350px) {
    margin-top: 300px;
  }

  @media (min-width: 576px) {
    margin-top: 200px;
  }

  @media (min-width: 768px) {
    margin-top: 100px;
  } */

  @media (min-width: 992px) {
    padding: ${(props) => props.theme.largePadding};
    margin-top: 100px;
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

  .aboutMeInfo {
    max-width: 900px;
    background-color: #252627;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.25);
    padding: 25px;

    @media (min-width: 576px) {
      padding: 37.5px;
    }

    @media (min-width: 768px) {
      padding: 50px;
    }

    @media (min-width: 992px) {
      position: relative;
      top: -40px;
      left: 50%;
      right: 50%;
      transform: translate(-50%);
      z-index: 1;
    }

    p {
      font-size: ${(props) => props.theme.baseFontSize};
      letter-spacing: ${(props) => props.theme.baseLetterSpacing};
      line-height: ${(props) => props.theme.baseLineHeight};
      color: #fff;
      filter: brightness(86%);

      @media (min-width: 576px) {
        font-size: ${(props) => props.theme._576_baseFontSize};
        letter-spacing: ${(props) => props.theme._576_baseLetterSpacing};
        line-height: ${(props) => props.theme._576_baseLineHeight};
      }

      @media (min-width: 768px) {
        font-size: ${(props) => props.theme._768_baseFontSize};
        letter-spacing: ${(props) => props.theme._768_baseLetterSpacing};
        line-height: ${(props) => props.theme._768_baseLineHeight};
      }

      @media (min-width: 992px) {
        font-size: ${(props) => props.theme._992_baseFontSize};
        letter-spacing: ${(props) => props.theme._992_baseLetterSpacing};
        line-height: ${(props) => props.theme._992_baseLineHeight};
      }

      &::nth-child(2),
      &::last-child {
        margin-top: 30px;
      }
    }

    .eduAndQuals {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      i {
        color: ${(props) => props.theme.greenText};
        filter: brightness(86%);
        font-size: ${(props) => props.theme.baseIconSize};

        @media (min-width: 576px) {
          font-size: ${(props) => props.theme._576_IconSize};
        }

        @media (min-width: 768px) {
          font-size: ${(props) => props.theme._768_IconSize};
        }

        @media (min-width: 992px) {
          ${(props) => props.theme._992_IconSize};
        }
      }

      .detailsContainer {
        display: flex;
        flex-direction: column;

        i {
          text-align: center;
          color: ${(props) => props.theme.greenText};
          font-size: ${(props) => props.theme.baseIconSize};

          @media (min-width: 576px) {
            font-size: ${(props) => props.theme._576_IconSize};
          }

          @media (min-width: 768px) {
            font-size: ${(props) => props.theme._768_IconSize};
          }

          @media (min-width: 992px) {
            ${(props) => props.theme._992_IconSize};
          }
        }

        .detail {
          margin-top: 30px;

          p {
          }

          small {
            font-size: ${(props) => props.theme.smallTextBasic};
            color: ${(props) => props.theme.blueText};
            margin-top: 10px;

            @media (min-width: 576px) {
              font-size: ${(props) => props.theme._576_smallTextBasic};
            }

            @media (min-width: 768px) {
              font-size: ${(props) => props.theme._768_smallTextBasic};
            }

            @media (min-width: 992px) {
              font-size: ${(props) => props.theme._992_smallTextBasic};
            }
          }
        }
      }
    }
  }

  img {
    width: 300px;
    position: relative;
    /* top: -300px; */
    left: calc(100% - 100px);
    right: calc(100% - 100px);
    transform: translateX(calc(-100% + 100px));

    @media (min-width: 992px) {
      top: -300px;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout id="about">
      <h1>About</h1>
      <div className="aboutMeInfo">
        <p>
          I've been learning to code for many years, Computer Science studies
          also broadened my knowledge and enabled me to work in groups with
          other programmers. Initially I was focused on JavaScript and
          TypeScript both with NodeJS and React, but from about a year I'm truly
          passionate about Golang and its related technologies.
        </p>
        <div className="eduAndQuals">
          <i className="fas fa-stream"></i>
          <div className="detailsContainer">
            <i className="fas fa-book-reader"></i>
            <div className="detail">
              <p>Oct 2017 - current</p>
              <small>AGH UST Cracow, Computer Science</small>
            </div>
          </div>
        </div>
      </div>
      <img src={pattern} alt="fancy pattern" />
    </StyledAbout>
  );
};

export default About;
