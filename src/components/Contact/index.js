import React from "react";
import styled from "styled-components";

import ParticlesComponent from "../../config/particles";
import { contactInfo } from "../../config/contactConfig";

const StyledContact = styled.div`
  padding: ${(props) => props.theme.smallPadding};
  height: 800px;
  margin-top: 100px;

  @media (min-width: 992px) {
    padding: ${(props) => props.theme.largePadding};
  }

  h1 {
    text-align: right;
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

  .contactInfo {
    margin-top: 100px;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .phone,
    .email,
    .linkedin {
      display: flex;
      align-items: center;
      letter-spacing: 1.5px;

      i {
        color: ${(props) => props.theme.blueText};
        position: relative;
        filter: grayscale(100%);
        font-size: 2rem;

        &:hover {
          filter: grayscale(0%);
          color: ${(props) => props.theme.blueText};
          transition: 0.8s ease;
        }
      }

      h2 {
        font-size: 1.2rem;
        color: ${(props) => props.theme.greenText};
        text-align: center;
        position: relative;
        margin-left: 1.7rem;
        filter: grayscale(100%);

        &:hover {
          filter: grayscale(0%);
          color: ${(props) => props.theme.greenText};
          transition: 0.8s ease;
        }

        @media (min-width: 576px) {
          font-size: 1.25rem;
          margin-left: 2.5rem;
        }

        @media (min-width: 768px) {
          font-size: 1.5rem;
          margin-left: 3rem;
        }

        @media (min-width: 992px) {
          font-size: 1.8rem;
          margin-left: 4rem;
        }

        @media (min-width: 1200px) {
          font-size: 2.3rem;
          margin-left: 5rem;
        }
      }
    }

    footer {
      width: 100%;
      text-align: center;
      position: relative;

      p {
        margin-top: 20px;
        letter-spacing: 3px;
        word-spacing: 10px;
        font-size: 0.6rem;
        color: #fafafa;
        position: absolute;
        right: 0;
        left: 0;

        @media (min-width: 576px) {
          font-size: 0.8rem;
        }

        @media (min-width: 768px) {
          font-size: 1rem;
          bottom: -100px;
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <StyledContact id="contact">
      <h1>Contact</h1>
      <div className="contactInfo">
        <div className="phone">
          <i className="fas fa-phone"></i>
          <h2>{contactInfo.phone}</h2>
        </div>
        <div className="email">
          <i className="fas fa-envelope"></i>
          <h2>{contactInfo.email}</h2>
        </div>
        <div className="linkedin">
          {contactInfo.linkedin && (
            <a
              href={contactInfo.linkedin.link}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {contactInfo.displayTxt && <h2>{contactInfo.linkedin.displayTxt}</h2>}
        </div>
        <footer>
          <hr />
          <p>{new Date().getFullYear()}</p>
        </footer>
      </div>
    </StyledContact>
  );
};

export default Contact;
