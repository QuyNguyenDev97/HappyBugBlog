// "use client";

import { pxToRem } from "@/utils/styledHelper";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import styled from "@emotion/styled";

const WaveLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${pxToRem(16)};
  .wave {
    width: ${pxToRem(5)};
    height: ${pxToRem(100)};
    background: linear-gradient(45deg, cyan, #fff);
    margin: ${pxToRem(10)};
    animation: wave 1s linear infinite;
    border-radius: ${pxToRem(20)};
  }
  .wave:nth-child(1) {
    animation-delay: 0s;
  }
  .wave:nth-child(2) {
    animation-delay: 0.1s;
  }
  .wave:nth-child(3) {
    animation-delay: 0.2s;
  }
  .wave:nth-child(4) {
    animation-delay: 0.3s;
  }
  .wave:nth-child(5) {
    animation-delay: 0.4s;
  }
  .wave:nth-child(6) {
    animation-delay: 0.5s;
  }
  .wave:nth-child(7) {
    animation-delay: 0.6s;
  }
  .wave:nth-child(8) {
    animation-delay: 0.7s;
  }
  .wave:nth-child(9) {
    animation-delay: 0.8s;
  }
  .wave:nth-child(10) {
    animation-delay: 0.9s;
  }
  .wave:nth-child(11) {
    animation-delay: 1s;
  }
  .wave:nth-child(12) {
    animation-delay: 1.1s;
  }
  .wave:nth-child(13) {
    animation-delay: 1.2s;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  white-space: nowrap;
  .content-child-1,
  .content-child-2 {
    color: #fff;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .content-child-1 {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;
  }
  .content-child-2 {
    color: #03a9f4;
    animation: wavetext 1s ease-in-out infinite;
  }
  @keyframes wavetext {
    0%,
    100% {
      clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }

    50% {
      clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
  }
`;

type WaveLoadingProps = {
  content?: string | ReactNode;
};

function WaveLoading({ content }: WaveLoadingProps) {
  return (
    <>
      <WaveLoadingWrapper className='center'>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
        <Box className='wave'></Box>
      </WaveLoadingWrapper>
      <ContentWrapper className='content'>
        <Typography
          variant='h4'
          fontSize={{
            xs: 24,
            sm: 24,
            md: 36,
          }}
          className='content-child-1'
          fontWeight={700}
        >
          {content}
        </Typography>
        <Typography
          variant='h4'
          fontSize={{
            xs: 24,
            sm: 24,
            md: 36,
          }}
          className='content-child-2'
          fontWeight={700}
        >
          {content}
        </Typography>
      </ContentWrapper>
    </>
  );
}

export default WaveLoading;
