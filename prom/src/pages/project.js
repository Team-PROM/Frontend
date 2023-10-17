import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";

export default function ProjectPage() {
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
    <Body height={height} theme={theme}>
      project
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  background-color: ${({ theme }) => `${theme.background}`};
`;
