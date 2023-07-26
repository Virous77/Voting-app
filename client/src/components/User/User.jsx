import styles from "./user.module.scss";
import Profile from "./Profile";
import { useQuery } from "react-query";
import { getAPI } from "../apis/apis";
import { getLocalData } from "../../utils/utils";

const User = () => {
  const id = getLocalData("vId");
  const { data, isLoading } = useQuery("user", {
    queryFn: () => {
      return getAPI({ endPoints: `/user/${String(id)}` });
    },
    retry: false,
    enabled: id ? true : false,
    refetchOnWindowFocus: false,
  });

  return (
    <main className={styles.user}>
      <Profile userData={data} />
    </main>
  );
};

export default User;
