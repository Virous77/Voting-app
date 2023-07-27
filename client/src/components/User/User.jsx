import styles from "./user.module.scss";
import Profile from "./Profile";
import { useQuery } from "react-query";
import { getAPI } from "../apis/apis";
import { getLocalData } from "../../utils/utils";
import Loader from "../UI/Loader";
import Header from "./Header";
import CreateVote from "./CreateVote";
import { Modal } from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader";
import { useGlobalContext } from "../../store/globalContext";

const User = () => {
  const id = getLocalData("vId");
  const { state, setState } = useGlobalContext();

  const { data, isLoading } = useQuery("profile", {
    queryFn: () => {
      return getAPI({ endPoints: `/user/${String(id)}` });
    },
    retry: false,
    enabled: id ? true : false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loader />;

  return (
    <main className={styles.user}>
      <Profile userData={data} />
      <Header />

      {state.tab === "create" && (
        <Modal
          isOpen="isOpen"
          onClose={() => setState({ ...state, tab: "running" })}
        >
          <ModalHeader
            name="Create Voting"
            onClose={() => setState({ ...state, tab: "running" })}
          />
          <CreateVote />
        </Modal>
      )}
    </main>
  );
};

export default User;
