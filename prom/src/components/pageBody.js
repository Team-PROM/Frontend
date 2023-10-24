import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";
import { Icon } from "@iconify/react";

export default function Body({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const wife = navigator.onLine;
  console.log(wife);

  useEffect(() => {
    const setSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <>
      {wife ? (
        <_Body width={width} height={height} theme={theme}>
          {children}
        </_Body>
      ) : (
        <Error width={width} height={height} theme={theme}>
          <Icon icon='clarity:no-wifi-line' color='white' width='100' />
          와이파이가 연결되어 있지 않습니다!
        </Error>
      )}
    </>
  );
}

const _Body = styled.div`
  width: ${({ width }) => `${width - 218}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ theme }) => `${theme.background}`};
  color: white;
`;

const Error = styled.div`
  width: ${({ width }) => `${width - 218}px`};
  height: ${({ height }) => `${(height / 10) * 7}px`};
  background-color: ${({ theme }) => `${theme.background}`};
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: ${({ height }) => `${(height / 10) * 3}px`};
  align-items: center;
  gap: 20px;
  font-size: 24px;
  font-weight: 700;
`;
