import React from "react";
import { styled } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Menu from "./components/menu";

const width = window.innerWidth;
const height = window.innerHeight;

export default function App() {
  console.log(width, height);
  return (
    <Wrapper>
      <GlobalStyle />
      <Menu></Menu>
      <SmallWrapper>
        <Header />
        <Body width={width} height={height} theme={theme}>
          body
        </Body>
      </SmallWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => `${theme.background}`};
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 218px);
`;

const Body = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  background-color: ${({ theme }) => `${theme.background}`};
`;
