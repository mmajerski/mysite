import React from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";

import imgGif from "../../img/tGif.gif";
import {
  firstLineTyped,
  secondLineTyped,
  thirdLineTyped,
  smallTextTyped
} from "../../config/mainInfo";

const MainInfoStyled = styled.div`
  padding: ${(props) => props.theme.smallPadding};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* height: calc(100vh - 81.6px); */

  @media (min-width: 992px) {
    padding: ${(props) => props.theme.largePadding};
    height: calc(100vh - 81.6px);
  }

  @media (max-width: 992px) {
    margin-bottom: 200px;
  }

  .text {
    margin-top: 20px;
    width: 100%;

    h1 {
      color: #fff;
      font-size: 3rem;
      cursor: context-menu;
      text-align: center;
      width: 100%;

      @media (min-width: 768px) {
        margin-top: 75px;
      }

      span {
        display: inline-block;
        z-index: 10;

        &.blueText {
          color: ${(props) => props.theme.blueText};
        }
      }

      @media (min-width: 768px) {
        text-align: left;
      }
    }

    .smallText {
      letter-spacing: 3px;
      word-spacing: 10px;
      text-align: center;
      font-size: 1.2rem;
      color: ${(props) => props.theme.blueText};
      margin-top: 10px;

      @media (min-width: 768px) {
        text-align: left;
        font-size: 1.2rem;
      }

      @media (min-width: 992px) {
        margin-top: 20px;
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;
      text-align: center;
      text-decoration: none;
      font-size: 0.9rem;
      text-transform: uppercase;

      padding: 12px 25px;
      background-color: none;
      border: 3px solid ${(props) => props.theme.greenText};
      color: ${(props) => props.theme.greenText};
      font-size: 1.2rem;
      letter-spacing: 2px;
      position: relative;
      top: 80px;

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

      @media (min-width: 768px) {
        animation: 2s fadeIn;
        animation-fill-mode: forwards;
        animation-delay: 1s;

        visibility: hidden;

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            visibility: visible;
            opacity: 1;
          }
        }
      }

      @media (min-width: 992px) {
        width: 50%;
        margin-top: 50px;
      }
    }

    @media (max-width: 768px) {
      margin-top: 6.5rem;
    }

    @media (min-width: 768px) {
      margin-top: 50px;
      width: 55%;
    }
  }

  .profile-image img {
    margin-top: 150px;
    width: 300px;
    border-radius: 100%;
    box-shadow: 2px 2px 10px 10px ${(props) => props.theme.blueText};
  }

  /* .profile-image {
    overflow: hidden;

    img {
      @media (min-width: 768px) {
        animation: fadeInFromNone 3.5s ease;
      }

      @media (max-width: 768px) {
        margin-top: 75px;
        max-width: 640px;
        max-height: 480px;
      }

      @keyframes fadeInFromNone {
        0% {
          display: none;
          opacity: 0;
        }

        1% {
          display: block;
          opacity: 0;
        }

        100% {
          display: block;
          opacity: 1;
        }
      }
    }

    @media (max-width: 768px) {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      width: 300px;
      height: 450px;
    }

    @media (min-width: 1100px) {
      width: 400px;
      height: 600px;
    }
  } */
`;

const MainInfo = () => {
  return (
    <MainInfoStyled>
      <div className="text">
        <h1>
          <ReactTypingEffect
            cursor=" "
            text={firstLineTyped}
            speed={100}
            eraseDelay={1000 * 60 * 60 * 24 * 365}
          />
          <br />
          <span className="blueText">
            <ReactTypingEffect
              cursor=" "
              typingDelay={3000}
              eraseDelay={1000 * 60 * 60 * 24 * 365}
              speed={100}
              text={secondLineTyped}
            />
          </span>
          <br />
          <ReactTypingEffect
            cursor=" "
            typingDelay={4500}
            eraseDelay={1000 * 60 * 60 * 24 * 365}
            speed={100}
            text={thirdLineTyped}
          />
        </h1>
        <div className="smallText">
          <ReactTypingEffect
            cursor=" "
            typingDelay={9000}
            eraseDelay={1000 * 60 * 60 * 24 * 365}
            speed={100}
            text={smallTextTyped}
          />
        </div>
        <a href="#contact">contact me</a>
      </div>
      <div className="profile-image">
        <img src={imgGif} alt="user" />
      </div>
    </MainInfoStyled>
  );
};

export default MainInfo;
