import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";

export default function Body({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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
    <_Body width={width} height={height} theme={theme}>
      {children}
    </_Body>
  );
}

const _Body = styled.div`
  width: ${({ width }) => `${width - 218}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ theme }) => `${theme.background}`};
  color: white;
`;
