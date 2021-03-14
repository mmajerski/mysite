import { ThemeProvider } from "styled-components";

import Splash from "./components/Splash";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesComponent from "./config/particles";

import {
  mainExperienceItems,
  sideExperienceItems
} from "./config/imagesForSkills";

const theme = {
  // global
  blueText: "#48b0cf",
  greenText: "#48cfad",
  smallFontSize: "0.8rem",
  largePadding: "0 100px 0 100px",
  mediumPadding: "0 50px 0 50px",
  smallPadding: "0 25px 0 25px",
  h1BasicFontSize: "5rem",
  h1_576_fontSize: "7.5rem",
  h1_768_fontSize: "8.5rem",
  h1_992_fontSize: "10rem",
  // navbar
  navBackgroundColor: "#181818",
  navLinksColor: "#707070",
  // about section
  // paragraph settings;
  baseFontSize: "0.8rem",
  baseLetterSpacing: "1px",
  baseLineHeight: "1.5",
  _576_baseFontSize: "1.2rem",
  _576_baseLetterSpacing: "1.5px",
  _576_baseLineHeight: "1.75",
  _768_baseFontSize: "1.4rem",
  _768_baseLetterSpacing: "1.7px",
  _768_baseLineHeight: "1.85",
  _992_baseFontSize: "1.6rem",
  _992_baseLetterSpacing: "2px",
  _992_baseLineHeight: "1.9",
  // icons
  baseIconSize: "5rem",
  _576_IconSize: "7rem",
  _768_IconSize: "8.5rem",
  _992_IconSize: "10rem",
  // small text
  smallTextBasic: "0.4rem",
  _576_smallTextBasic: "0.6rem",
  _768_smallTextBasic: "0.8rem",
  _992_smallTextBasic: "0.9rem",
  // skills section
  skillTitleBasicFont: "2rem",
  _576_skillTitleBasicFont: "2.5rem",
  _768_skillTitleBasicFont: "3.2rem",
  _992_skillTitleBasicFont: "4rem",
  // imgs
  baseSkillImgSize: "40px",
  _576_SkillImgSize: "45px",
  _768_baseSkillImgSize: "50px",
  _992_baseSkillImgSize: "55px"
};

function App() {
  return (
    <ParticlesComponent>
      <ThemeProvider theme={theme}>
        <Splash />
        <About />
        <Skills skills={mainExperienceItems} />
        <Skills skills={sideExperienceItems} sideExp />
        <Projects />
        <Contact />
      </ThemeProvider>
    </ParticlesComponent>
  );
}

export default App;