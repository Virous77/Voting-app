import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useWeb3 } from "../../store/web3Context";
import userProfile from "../../assets/user2.avif";
import { useNavigate } from "react-router-dom";
import { getLocalData } from "../../utils/utils";

const Header = () => {
  const { handleConnect, handleDisconnect, user } = useWeb3();
  const navigate = useNavigate();
  const id = getLocalData("vId");

  return (
    <nav>
      <header>
        <div className={styles.logo}>
          <Link to="/">
            <h1>VoteNexus</h1>
          </Link>
        </div>

        <div className={styles["right-nav"]}>
          {id && (
            <div className={styles.user} onClick={() => navigate("/profile")}>
              <img src={userProfile} alt="user" />
            </div>
          )}

          {!user.isLoggedIn && <button onClick={handleConnect}>Connect</button>}
          {user.isLoggedIn && (
            <button onClick={handleDisconnect}>Disconnect</button>
          )}
        </div>
      </header>
    </nav>
  );
};

export default Header;
