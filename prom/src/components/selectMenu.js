import { useState } from "react";
import { styled, css } from "styled-components";
import { Icon } from "@iconify/react";
import { theme } from "../styles/theme";

export default function SelectMenu({ keyword }) {
  const [on, setOn] = useState(false);

  switch (keyword) {
    case "team":
      return (
        <Container
          onClick={() => {
            setOn(!on);
            console.log(on);
          }}>
          <div>
            <Icon icon='ion:people-sharp' color={theme.color.sub2} width='14' />
          </div>
          팀원
          <Arrow on={on}>
            <Icon
              icon='fluent:ios-arrow-24-filled'
              color={theme.color.sub2}
              width='10'
            />
          </Arrow>
        </Container>
      );
    case "domain":
      return (
        <Container
          onClick={() => {
            setOn(!on);
            console.log(on);
          }}>
          <div>
            <Icon
              icon='material-symbols:border-all'
              color={theme.color.sub2}
              width='14'
            />
          </div>
          도메인
          <Arrow on={on}>
            <Icon
              icon='fluent:ios-arrow-24-filled'
              color={theme.color.sub2}
              width='10'
            />
          </Arrow>
        </Container>
      );
    case "tag":
      return (
        <Container
          onClick={() => {
            setOn(!on);
            console.log(on);
          }}>
          <div>
            <Icon icon='ph:tag-fill' color={theme.color.sub2} width='14' />
          </div>
          태그
          <Arrow on={on}>
            <Icon
              icon='fluent:ios-arrow-24-filled'
              color={theme.color.sub2}
              width='10'
            />
          </Arrow>
        </Container>
      );
    default:
      return null;
  }
}

const Container = styled.div`
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
  div {
    width: 14px;
    height: 14px;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
