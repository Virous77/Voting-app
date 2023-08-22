import React from "react";
import styles from "./user.module.scss";
import { BsCheck } from "react-icons/bs";
import { useVote } from "../../store/voteContext";

const VoteType = () => {
  const { createVote, setCreateVote, handleChange } = useVote();
  return (
    <div className={styles["vote-type-main"]}>
      <div className={styles["vote-type"]}>
        <label>Vote Type: </label>
        <div className={styles["vote-type-wrap"]}>
          <div>
            <p
              onClick={() =>
                setCreateVote({ ...createVote, vote_type: "public" })
              }
            >
              {createVote.vote_type === "public" && (
                <BsCheck size={22} color="white" />
              )}
            </p>
            <b>Public</b>
          </div>

          <div>
            <p
              onClick={() =>
                setCreateVote({ ...createVote, vote_type: "private" })
              }
            >
              {createVote.vote_type === "private" && (
                <BsCheck size={22} color="white" />
              )}
            </p>
            <b>Private</b>
          </div>
        </div>
      </div>

      {createVote.vote_type === "private" && (
        <div style={{ marginTop: "1rem" }}>
          <fieldset>
            <label htmlFor="vote_password">Vote Password</label>
            <input
              type="text"
              name="vote_password"
              value={createVote.vote_password}
              onChange={handleChange}
            />
          </fieldset>
        </div>
      )}
    </div>
  );
};

export default VoteType;
