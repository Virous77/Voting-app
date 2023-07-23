import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useWeb3 } from "../../store/web3Context";

const Header = () => {
  const { handleConnect, handleDisconnect, user } = useWeb3();
  return (
    <nav>
      <header>
        <div className={styles.logo}>
          <Link to="/">
            <h1>VoteNexus</h1>
          </Link>
        </div>

        <div className={styles["right-nav"]}>
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
