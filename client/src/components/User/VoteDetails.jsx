import React from "react";
import styles from "./user.module.scss";
import { dateFormate } from "../../utils/utils";

const VoteDetails = ({ voteDetails }) => {
  return (
    <div className={styles["details-main"]}>
      <div className={styles.admin}>
        <h2>Admin</h2>
        <div className={styles["details-wrap"]}>
          <div>
            <b>Admin</b>
            <p>{voteDetails.admin}</p>
          </div>

          <div>
            <b>Admin Address</b>
            <p>{voteDetails.admin_address}</p>
          </div>
        </div>
      </div>

      <div className={styles["details-candidate"]}>
        <h2>Candidates</h2>
        <div>
          {voteDetails.for_vote.map((candidate) => (
            <div key={candidate._id} className={styles["details-wrap"]}>
              <div>
                <b>Candidate</b>
                <p>{candidate.candidate}</p>
              </div>

              <div>
                <b>Candidate Address</b>
                <p>{candidate.candidate_address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["vote-running"]}>
        <h2>Vote Timing</h2>

        <div className={styles["details-wrap"]}>
          <div>
            <b>Start Date</b>
            <p>{dateFormate(new Date(voteDetails.start_time))}</p>
          </div>

          <div>
            <b>End Date</b>
            <p>{dateFormate(new Date(voteDetails.end_time))}</p>
          </div>
        </div>
      </div>

      <div className={styles.status}>
        <h2>Status :</h2>
        <p>{voteDetails.status === "running" ? "Running" : "Completed"}</p>
      </div>
    </div>
  );
};

export default VoteDetails;
