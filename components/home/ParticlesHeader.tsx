//@ts-nocheck

"use client";

import { Box, styled } from "@mui/material";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

const ParticlesWrapper = styled(Box)`
  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: 0;
  }
`;

const ParticlesHeader = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false,
      fps_limit: 60,
      particles: {
        color: {
          value: ["#ffffff", "#1254ef"],
        },
        links: {
          color: "random",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          collisions: true,
          direction: "none",
          enable: true,
          out_mode: "bounce",
          random: false,
          speed: 5,
          straight: false,
        },
        number: { density: { enable: true, value_area: 800 }, value: 80 },
        opacity: {
          animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
          random: true,
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          animation: {
            enable: true,
            minimumValue: 2,
            speed: 1,
            sync: false,
          },
          random: {
            enable: true,
            minimumValue: 2,
          },
          value: 4,
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return (
      <ParticlesWrapper position='absolute' overflow='hidden' top={0} left={0} right={0} height='100dvh'>
        <Particles id='tsparticles' options={options} />
      </ParticlesWrapper>
    );
  }

  return null;
};

export default ParticlesHeader;
