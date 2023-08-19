import React, { useState } from "react";
import { MdHowToVote } from "react-icons/md";
import { dateFormate } from "../../utils/utils";
import styles from "./user.module.scss";
import ModalHeader from "../Modal/ModalHeader";
import { Modal } from "../Modal/Modal";
import VoteDetails from "./VoteDetails";

const VoteList = ({ vote }) => {
  const [voteDetails, setVoteDetails] = useState(null);
  return (
    <div className={styles["vote-list"]}>
      <MdHowToVote size={25} />

      <div>
        <h3>{vote.admin}</h3>
        <p onClick={() => setVoteDetails(vote)}>More Details..</p>
      </div>

      <div>
        <small>Vote Start :- {dateFormate(new Date(vote.start_time))}</small>
        <small>Vote End :- {dateFormate(new Date(vote.end_time))}</small>
      </div>

      {voteDetails && (
        <Modal isOpen="isOpen" onClose={() => setVoteDetails(null)}>
          <ModalHeader
            onClose={() => setVoteDetails(null)}
            name="Vote Details"
          />
          <VoteDetails />
        </Modal>
      )}
    </div>
  );
};

export default VoteList;
