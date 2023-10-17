import React from "react";
import { styled } from "styled-components";

export default function MenuButton({ children }) {
  return <Body>{children}</Body>;
}

const Body = styled.div`
  width: 100%;
  height: 38px;
  text-align: center;
  line-height: 38px;
  font-size: 14px;
  color: white;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
