import React from "react";
import { ThemeProvider, styled } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/common/header";
import Menu from "./components/common/menu";
import { Router } from "./router";
import { GlobalFont } from "./styles/GlobalFont";
import Modal from "./components/modal/modal";
import { useRecoilState } from "recoil";
import { modalState } from "./utils/atom";

export default function App() {
  const [useModalState, setModalState] = useRecoilState(modalState);

  return (
    <Wrapper>
      <GlobalFont />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {useModalState && <Modal />}
        <Menu></Menu>
        <SmallWrapper>
          <Header />
          <Router />
        </SmallWrapper>
      </ThemeProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => `${theme.background}`};
  position: fixed;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 218px);
`;
