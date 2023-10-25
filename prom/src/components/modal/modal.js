import { useRecoilState } from "recoil";
import { modalState } from "../../utils/atom";

export default function Modal() {
  const [useModalState, setModalState] = useRecoilState(modalState);

  switch (useModalState) {
    case "project":
      return;
  }
}
