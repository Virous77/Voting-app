import styles from "./user.module.scss";
import userPic from "../../assets/user2.avif";
import { LuCopy } from "react-icons/lu";
import { useGlobalContext } from "../../store/globalContext";

const Profile = ({ userData }) => {
  const { handleSetNotification } = useGlobalContext();

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    handleSetNotification({
      message: "Wallet Address copied to clipboard.",
      status: "success",
    });
  };

  return (
    <section className={styles.profile}>
      <div className={styles.userPic}>
        <img src={userPic} alt={userData.name} />
      </div>
      <div>
        <h2>{userData.name}</h2>
        <p>
          <small>Wallet Address: {userData.wallet_address}</small>
          <LuCopy
            size={18}
            cursor="pointer"
            onClick={() => handleCopy(userData.wallet_address)}
          />
        </p>
      </div>
    </section>
  );
};

export default Profile;
