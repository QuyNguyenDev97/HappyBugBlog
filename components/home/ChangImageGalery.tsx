"use client";

import { pxToRem } from "@/utils/styledHelper";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import React from "react";

const imageList = [
  {
    src: "/react.png",
    alt: "react",
  },
  {
    src: "/typescript.png",
    alt: "typescript",
  },
  {
    src: "/node.png",
    alt: "node",
  },
  {
    src: "/css.png",
    alt: "css",
  },
  {
    src: "/html.png",
    alt: "html",
  },
  {
    src: "/js.png",
    alt: "javascript",
  },
];

const ChangeImageGaleryWrapper = styled(Box)`
  width: ${pxToRem(300)};
  height: ${pxToRem(300)};
  position: relative;
  img {
    animation: fadeIn 1 ease-in-out;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function ChangeImageGalery() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderImage = React.useMemo(() => {
    return (
      <Image
        className='section-galery-image'
        style={{ pointerEvents: "none" }}
        src={imageList[index].src}
        alt={imageList[index].alt}
        priority
        fill
        sizes='100%'
      />
    );
  }, [index]);

  return <ChangeImageGaleryWrapper>{renderImage}</ChangeImageGaleryWrapper>;
}

export default ChangeImageGalery;
