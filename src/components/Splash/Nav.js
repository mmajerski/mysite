import React from "react";
import styled from "styled-components";

import { navText } from "../../config/mainInfo";

const StyledNav = styled.div`
  padding: ${(props) => props.theme.smallPadding};
  background-color: ${(props) => props.theme.navBackgroundColor};

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(rgb(37, 38, 39), 0),
    rgba(37, 38, 39, 1)
  );
  box-shadow: 1px 1px 1px #222;
  opacity: 0.9;
  z-index: 999;

  @media (min-width: 768px) {
    padding: ${(props) => props.theme.smallPadding};
  }

  @media (min-width: 992px) {
    padding: ${(props) => props.theme.largePadding};
  }

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 0;

    h1,
    a {
      color: ${(props) => props.theme.navLinksColor};
      @media (max-width: 356px) {
        font-size: 0.9rem;
      }
    }

    nav {
      @media (max-width: 384px) {
        /* display: none; */
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          list-style: none;
          margin-left: 30px;

          a {
            text-decoration: none;
            font-size: 0.9rem;
            text-transform: uppercase;
            position: relative;
            top: 50%;
            bottom: 50%;
            transform: translateY(-50%);

            &:hover {
              color: #fff;
              transition: 0.8s ease;
            }

            @media (max-width: 356px) {
              font-size: 0.6rem;
            }
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <header>
        <h1>{navText}</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">about me</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
            <li>
              <a href="#projects">my projects</a>
            </li>
          </ul>
        </nav>
      </header>
    </StyledNav>
  );
};

export default Nav;
