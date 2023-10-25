import { useRef, useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { Icon } from "@iconify/react";
import { theme } from "../styles/theme";

export default function SelectMenu({ keyword }) {
  const [on, setOn] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  switch (keyword) {
    case "team":
      return (
        <>
          <Container
            onClick={() => {
              setOn(true);
            }}>
            <Icon_>
              <Icon
                icon='ion:people-sharp'
                color={theme.color.sub2}
                width='14'
              />
            </Icon_>
            팀원
            <Arrow on={on}>
              <Icon
                icon='fluent:ios-arrow-24-filled'
                color={theme.color.sub2}
                width='10'
              />
            </Arrow>
            <DropBox
              on={on}
              onMouseOver={() => {
                setMouseOver(false);
              }}
              onMouseLeave={() => {
                setMouseOver(true);
              }}></DropBox>
          </Container>

          <Back
            on={on}
            onClick={() => {
              setOn(false);
            }}></Back>
        </>
      );
    case "domain":
      return (
        <>
          <Container
            onClick={() => {
              setOn(!on);
            }}>
            <Icon_>
              <Icon
                icon='material-symbols:border-all'
                color={theme.color.sub2}
                width='14'
              />
            </Icon_>
            도메인
            <Arrow on={on}>
              <Icon
                icon='fluent:ios-arrow-24-filled'
                color={theme.color.sub2}
                width='10'
              />
            </Arrow>
            <DropBox on={on}></DropBox>
          </Container>

          <Back
            on={on}
            onClick={() => {
              setOn(false);
            }}></Back>
        </>
      );
    case "tag":
      return (
        <>
          <Container
            onClick={() => {
              setOn(!on);
            }}>
            <Icon_>
              <Icon icon='ph:tag-fill' color={theme.color.sub2} width='14' />
            </Icon_>
            태그
            <Arrow on={on}>
              <Icon
                icon='fluent:ios-arrow-24-filled'
                color={theme.color.sub2}
                width='10'
              />
            </Arrow>
            <DropBox on={on}></DropBox>
          </Container>

          <Back
            on={on}
            onClick={() => {
              setOn(false);
            }}></Back>
        </>
      );
    default:
      return null;
  }
}

const Container = styled.div`
  overflow: visible;
  position: relative;
  padding-left: 6px;
  padding-right: 6px;
  height: 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.menuback};
  border: 1px solid ${({ theme }) => theme.color.text2};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.size.microMedium};
  font-weight: ${({ theme }) => theme.weight.microMedium};
  cursor: pointer;
`;

const Icon_ = styled.div`
  width: 14px;
  height: 14px;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  transform: ${({ on }) => (on ? css`rotate(-90deg)` : css`rotate(90deg)`)};
  transition: 0.1s linear;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropBox = styled.div`
  opacity: ${({ on }) => (on ? "1" : "0")};
  width: 100px;
  transition: 0.2s linear;
  height: ${({ on }) => (on ? "100px" : "0px")};
  flex: 0;
  top: 26px;
  left: 0px;
  position: absolute;
  background-color: red;
  background-color: ${({ theme }) => theme.color.menuback};
  border: 1px solid ${({ theme }) => theme.color.text2};
  border-radius: 4px;
  z-index: 2;
`;

const Back = styled.div`
  left: -20px;
  opacity: ${({ on }) => (on ? "1" : "0")};
  width: ${({ on }) => (on ? "3000px" : "0px")};
  transition: 0.2s linear;
  height: ${({ on }) => (on ? "3000px" : "0px")};
  position: absolute;
  z-index: 1;
`;
