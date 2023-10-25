import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { styled } from "styled-components";

export default function ToggleButton() {
  const [on, setOn] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        setOn(!on);
      }}>
      <Button on={on}>
        <IconContainer on={on}>
          <Icon icon={"ion:flag"} width='12' />
          <Icon icon={"ic:round-check"} width='12' />
        </IconContainer>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3px;
  width: 50px;
  height: 24px;
  background-color: #2f2f2f;
  border-radius: 30px;
  display: flex;
  cursor: pointer;
`;

const Button = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #000000;
  text-align: center;
  line-height: 40px;
  transition: 0.1s linear;
  margin-left: ${({ on }) => (on ? "26px" : "0px")};
  display: flex;
  overflow: hidden;
`;

const IconContainer = styled.div`
  flex: none;
  padding-left: 6px;
  padding-right: 6px;
  width: 38px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.1s linear;
  margin-left: ${({ on }) => (on ? "-26px" : "0px")};
`;
