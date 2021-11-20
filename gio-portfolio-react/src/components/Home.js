import React from 'react';
import NavTabs from "./NavTabs";
import Header from "./Header";
import Particles from "react-tsparticles";
// import { makeStyles } from '@material-ui/styles';

// const setStyles = makeStyles({
//   particlesCanvas: {
//     position: "absolute"
//   }
// })

export default function Home() {
  

  return (
    <>
      <NavTabs />
      <Header />
      <Particles
        options={{
          particles: {
            color: {
              value: "#EFE2BA",
            },
            links: {
              color: "#FFCB9A",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            fpsLimit: 60,
            collisions: {
              enable: false,
            },
            interactivity: {
              Event: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6.5,
              straight: false,
            },

            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          }
        }}
      />
    </>
  );
};
