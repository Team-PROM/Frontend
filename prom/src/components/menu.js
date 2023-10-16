import React from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";
import MenuButton from "./menuButton";

export default function Menu() {
  return (
    <Body theme={theme}>
      <Project>
        <TitleContainer>
          <TitleLogo></TitleLogo>
          <TitleText theme={theme}>APPLE</TitleText>
        </TitleContainer>
        <TitleButton></TitleButton>
      </Project>
      <ButtonContainer>
        <MenuButton>알림</MenuButton>
        <MenuButton>프로젝트</MenuButton>
        <MenuButton>작업</MenuButton>
        <MenuButton>캘린더</MenuButton>
        <MenuButton>분석</MenuButton>
        <MenuButton>팀원</MenuButton>
        <MenuButton>이용약관</MenuButton>
      </ButtonContainer>
    </Body>
  );
}

const Body = styled.div`
  width: 218px;
  background-color: ${({ theme }) => theme.menuback};
  color: white;
`;

const Project = styled.div`
  width: calc(100% - 40px);
  height: 60px;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: calc(100% - 10px);
  height: 60px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const TitleLogo = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 4px;
  background-color: white;
`;

const TitleText = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.white};
  font-weight: 700;
`;

const TitleButton = styled.div`
  width: 10px;
  height: 20px;
  background-color: white;
`;

const ButtonContainer = styled.div`
  margin-top: 46px;
  & > :last-child {
    margin-top: 46px;
  }
`;
