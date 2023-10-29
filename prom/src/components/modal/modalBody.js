import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { modalState } from "../../utils/atom";
import { useState } from "react";

export default function ModalBody({ children }) {
  const [isHover, setIsHover] = useState(false);
  const [useModalState, setModalState] = useRecoilState(modalState);

  return (
    <Body_
      onClick={() => {
        if (isHover) return;
        setModalState(null);
      }}>
      <Body
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}>
        {children}
      </Body>
    </Body_>
  );
}

const Body = styled.div`
  padding: 14px 36px 20px 36px;
  width: calc(750px - 36px - 36px);
  height: calc(250px - 14px - 20px);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.menuback};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const Body_ = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
