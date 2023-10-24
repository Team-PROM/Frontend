import React, { useState } from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";
import MenuButton from "./menuButton";
import { Icon } from "@iconify/react";
import _Icon from "./icon";
import { Link, useLocation, useNavigate } from "react-router-dom";

const buttons = [
  { path: "alarm" },
  { path: "/" },
  { path: "task" },
  { path: "calendar" },
  { path: "analysis" },
  { path: "team" },
  { path: "guide" },
];

export default function Menu() {
  const [path, setPath] = useState("/");

  const link = useNavigate();

  const onNavigate = (url) => {
    setPath(url);
    link(`/${url}`);
  };

  const select = (selected) => {
    return selected == path;
  };

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
              color: "#C2C2C2",
            }}
          />
          <Icon
            icon='bxs:down-arrow'
            style={{
              fontSize: "10px",
              color: "#C2C2C2",
            }}
          />
        </TitleButton>
      </Project>
      <ButtonContainer>
        {buttons.map((element) => (
          <MenuButton
            event={() => {
              onNavigate(element.path);
            }}>
            <_Icon icon={element.path} path={path} />
          </MenuButton>
        ))}
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
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
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
  display: flex;
  flex-direction: column;
  & > :last-child {
    margin-top: 46px;
  }
`;
