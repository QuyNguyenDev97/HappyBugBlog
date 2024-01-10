"use client";

import WaveLoading from "@/commons/WaveLoading";
import styled from "@emotion/styled";

const MainPageLoadingWrapper = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-transform: capitalize;
`;

function MainPageLoading() {
  return (
    <MainPageLoadingWrapper>
      <WaveLoading content='Happy Code - Happy Bug' />
    </MainPageLoadingWrapper>
  );
}

export default MainPageLoading;
