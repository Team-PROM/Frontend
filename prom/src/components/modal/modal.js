import { useRecoilState } from "recoil";
import { modalState } from "../../utils/atom";
import ModalBody from "./modalBody";

export default function Modal() {
  const [useModalState, setModalState] = useRecoilState(modalState);

  const modalComponent = () => {
    switch (useModalState) {
      case "project":
        return <ModalBody></ModalBody>;
    }
  };

  return <>{modalComponent()}</>;
}
