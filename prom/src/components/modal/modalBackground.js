import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { modalState } from "../../utils/atom";

export default function ModalBackground({ children }) {
  const [useModalState, setModalState] = useRecoilState(modalState);

  return (
    <Body
      onClick={() => {
        setModalState(null);
      }}>
      {children}
    </Body>
  );
}

const Body = styled.div`
  position: absolute;
  z-index: 5;
  width: 2000px;
  height: 2000px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
