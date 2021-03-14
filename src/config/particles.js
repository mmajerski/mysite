import React from "react";
import Particles from "react-particles-js";

import useWindowDimensions from "../helpers/useWindowDimensions";

const ParticlesComponent = (props) => {
  const { width } = useWindowDimensions();
  let display = width > 992 ? "visible" : "hidden";

  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%"
        }}
      >
        <Particles
          style={{
            width: "100%",
            zIndex: "-999",
            visibility: display
          }}
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#0d47a1"
              }
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push"
                },
                onHover: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 80
                },
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 400,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: "#ffffff"
              },
              links: {
                color: "#ffffff",
                distance: 500,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800
                },
                value: 80
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: "circle"
              },
              size: {
                random: true,
                value: 5
              }
            },
            detectRetina: true
          }}
        />
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default ParticlesComponent;
