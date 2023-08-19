import { useQuery } from "react-query";
import { getAPI } from "../apis/apis";
import { useGlobalContext } from "../../store/globalContext";
import { getLocalData } from "../../utils/utils";
import Loader from "../UI/Loader";
import Empty from "../UI/Empty";
import noRunningVote from "../../assets/vote.svg";
import VoteList from "./VoteList";
import styles from "./user.module.scss";

const Running = () => {
  const { handleSetNotification } = useGlobalContext();
  const id = getLocalData("vId");

  const { data, isLoading } = useQuery("running", {
    queryFn: () => {
      return getAPI({
        endPoints: `/vote?admin_address=${id}&status=running`,
      });
    },
    onError: () => {
      handleSetNotification({
        message: "Something went wrong,Try again",
        status: "error",
      });
    },
  });

  if (isLoading) return <Loader />;

  return (
    <main
    className={styles.running}
    >
      {data.length > 0 ? (
        <div className={styles.vote}>
          {data && data?.map((vote) => <VoteList key={vote._id} vote={vote} />)}
        </div>
      ) : (
        <Empty
          image={noRunningVote}
          message="You have no running vote going on."
        />
      )}
    </main>
  );
};

export default Running;
