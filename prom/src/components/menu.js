import React from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";
import MenuButton from "./menuButton";
import { Icon } from "@iconify/react";

export default function Menu() {
  return (
    <Body theme={theme}>
      <Project>
        <TitleContainer>
          <TitleLogo></TitleLogo>
          <TitleText theme={theme}>APPLE</TitleText>
        </TitleContainer>
        <TitleButton>
          <Icon
            icon='bxs:up-arrow'
            style={{
              fontSize: "10px",
            }}
          />
          <Icon
            icon='bxs:down-arrow'
            style={{
              fontSize: "10px",
            }}
          />
        </TitleButton>
      </Project>
      <ButtonContainer>
        <MenuButton>
          <Icon
            icon='clarity:bell-line'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
          알림
        </MenuButton>
        <MenuButton>
          <Icon
            icon='ion:rocket-outline'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
          프로젝트
        </MenuButton>
        <MenuButton>
          <Icon
            icon='fluent:task-list-20-filled'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
          작업
        </MenuButton>
        <MenuButton>
          <Icon
            icon='system-uicons:calendar'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
          캘린더
        </MenuButton>
        <MenuButton>
          <Icon
            icon='ic:baseline-insights'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
          분석
        </MenuButton>
        <MenuButton>
          <Icon
            icon='ion:people-outline'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
          팀원
        </MenuButton>
        <MenuButton>
          <Icon
            icon='solar:question-circle-linear'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
          이용약관
        </MenuButton>
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
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 46px;
  & > :last-child {
    margin-top: 46px;
  }
`;
