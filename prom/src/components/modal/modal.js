import { useRecoilState } from "recoil";
import { modalState } from "../../utils/atom";
import ModalBackground from "./modalBackground";

export default function Modal() {
  const [useModalState, setModalState] = useRecoilState(modalState);

  const modalComponent = () => {
    switch (useModalState) {
      case "project":
        return;
    }
  };

  return <ModalBackground>{modalComponent}</ModalBackground>;
}
