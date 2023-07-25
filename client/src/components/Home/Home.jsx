import { Modal } from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader";
import SignUp from "../Auth/SignUp";
import { useGlobalContext } from "../../store/globalContext";

const Home = () => {
  const { state, setState } = useGlobalContext();
  return (
    <main>
      {state.register && (
        <Modal
          isOpen="isOpen"
          onClose={() => setState({ ...state, register: false })}
          width="500px"
        >
          <ModalHeader
            name="Sign Up"
            onClose={() => setState({ ...state, register: false })}
          />
          <SignUp />
        </Modal>
      )}
    </main>
  );
};

export default Home;
