import React from "react";
import { styled } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Menu from "./components/menu";
import { Router } from "./router";
import { GlobalFont } from "./styles/GlobalFont";

const width = window.innerWidth;
const height = window.innerHeight;

export default function App() {
  return (
    <Wrapper>
      <GlobalFont />
      <GlobalStyle />
      <Menu></Menu>
      <SmallWrapper>
        <Header />
        <Router />
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
