"use client";

import { Fab, styled } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import * as React from "react";

const ScollPageProcessWrapper = styled(Box)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const FabWrapper = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
  cursor: pointer;
  .MuiFab-root {
    border-radius: 50% 0 0 0;
    background: linear-gradient(to right, #662d8c 0%, #ed1e79 100%);
    color: #fff;
  }
`;

export default function ScollPageProcess() {
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const percentage = (scrolled / documentHeight) * 100;
    setScrollPercentage(percentage);
  };

  const scollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScollPageProcessWrapper>
        <LinearProgress variant='determinate' value={scrollPercentage} />
      </ScollPageProcessWrapper>
      {scrollPercentage === 100 && (
        <FabWrapper onClick={scollToTop}>
          <Fab size='small' color='primary'>
            <ArrowUpwardIcon fontSize='small' />
          </Fab>
        </FabWrapper>
      )}
    </>
  );
}
