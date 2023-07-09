import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useWeb3 } from "../../store/web3Context";

const Header = () => {
  const { handleConnect, handleDisconnect } = useWeb3();
  return (
    <nav>
      <header>
        <div className={styles.logo}>
          <Link to="/">
            <h1>VoteNexus</h1>
          </Link>
        </div>

        <div>
          <button onClick={handleConnect}>Connect</button>
          <button onClick={handleDisconnect}>Disconnect</button>
        </div>
      </header>
    </nav>
  );
};

export default Header;
