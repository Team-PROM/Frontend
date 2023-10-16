import React from "react";
import { styled } from "styled-components";

const width = window.innerWidth;
const height = window.innerHeight;

export default function App() {
  console.log(width, height);
  return (
    <Body width={width} height={height}>
      a
    </Body>
  );
}

const Body = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
