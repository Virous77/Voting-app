import React, { useState } from "react";
import { useWeb3 } from "../../store/web3Context";
import styles from "./SignUp.module.scss";
import { BsCheck } from "react-icons/bs";
import { useGlobalContext } from "../../store/globalContext";

const SignUp = () => {
  const { handleCreateUser, user, setUser, isLoading } = useWeb3();
  const [check, setCheck] = useState(false);
  const { handleSetNotification } = useGlobalContext();

  const handleAuth = () => {
    if (check) {
      handleCreateUser();
    } else {
      handleSetNotification({
        message: "Term condition agreement is must to use the App.",
        status: "error",
      });
    }
  };

  return (
    <section className={styles.SignUp}>
      <h2>VoteNexus</h2>

      <form onClick={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <fieldset>
          <p onClick={() => setCheck(!check)}>{check && <BsCheck />}</p>
          <small>I accept and agree term conditions for VoteNexus.</small>
        </fieldset>

        <button disabled={isLoading} onClick={handleAuth}>
          Continue
        </button>
      </form>
    </section>
  );
};

export default SignUp;
