import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <Body width={width}>
      <WidgetButton>
        <Icon icon='entypo:popup' style={{ fontSize: "21px" }} />
      </WidgetButton>
      <RightBox>
        <TeamBox></TeamBox>
        <SubMenu></SubMenu>
      </RightBox>
    </Body>
  );
}

const Body = styled.div`
  width: ${({ width }) => `${width - 286}px`};
  padding: 0 43px 0 25px;
  height: 60px;
  background-color: ${({ theme }) => theme.color.background};
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WidgetButton = styled.div`
  width: 30px;
  height: 30px;
`;

const RightBox = styled.div`
  display: flex;
`;

const TeamBox = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  background-color: white;
  margin-right: 47px;
`;

const SubMenu = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
`;
