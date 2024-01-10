"use client";

import { Box, styled } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const CustomCursorWrapper = styled(Box)`
  pointer-events: none;
  user-select: none;
  .cursor-amongus {
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    width: auto;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  const handleMouseMove = (e: any) => {
    setTimeout(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 100);
  };

  const handleMouseLeave = () => {
    setHidden(true);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setHidden(false);
  };

  useEffect(() => {
    if (hidden) return;
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hidden]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <CustomCursorWrapper
      style={{
        display: hidden ? "none" : "block",
        position: "fixed",
        zIndex: 999,
        left: position.x - 40,
        top: position.y - 40,
      }}
      width={40}
      height={40}
    >
      <Image className='cursor-amongus' src='/amongus.png' alt='cursor' width={40} height={40} />
    </CustomCursorWrapper>
  );
}

export default CustomCursor;
