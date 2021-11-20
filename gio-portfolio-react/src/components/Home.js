import React from 'react';
import NavTabs from "./NavTabs";
import Header from "./Header";
import Particles from "react-tsparticles";


export default function Home() {
  return (
    <>
      <NavTabs />
      <Header/>
      <Particles
      
          options = {{
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              fpsLimit: 60,
              collisions: {
                enable: true,
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
                speed: 6,
                straight: false,
              },
              
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              }

            }
          }}
          
          />
    </>
  );
}
