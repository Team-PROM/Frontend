import React from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";
import MenuButton from "./menuButton";
import { Icon } from "@iconify/react";
import _Icon from "./icon";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const path = useLocation().pathname;

  console.log(path);

  const select = (selected) => {
    console.log(selected, path, selected == path);
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
        <Link to='/alarm'>
          <MenuButton>
            <_Icon icon='alarm' select={select("/alarm")} />
          </MenuButton>
        </Link>
        <Link to='/'>
          <MenuButton>
            <_Icon icon='project' select={select("/")} />
          </MenuButton>
        </Link>
        <Link to='/task'>
          <MenuButton>
            <_Icon icon='list' select={select("/task")} />
          </MenuButton>
        </Link>
        <Link to='/calender'>
          <MenuButton>
            <_Icon icon='calender' select={select("/calender")} />
          </MenuButton>
        </Link>
        <Link to='/analysis'>
          <MenuButton>
            <_Icon icon='line' select={select("/analysis")} />
          </MenuButton>
        </Link>
        <Link to='/team'>
          <MenuButton>
            <_Icon icon='team' select={select("/team")} />
          </MenuButton>
        </Link>
        <Link to='/guide'>
          <MenuButton>
            <_Icon icon='question' select={select("/guide")} />
          </MenuButton>
        </Link>
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
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
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
