import styles from "./user.module.scss";
import { BsCheck } from "react-icons/bs";

const CreateVote = () => {
  return (
    <div className={styles.createVote}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.wrap}>
          <fieldset>
            <label htmlFor="admin">Admin Address</label>
            <input type="text" id="admin" name="admin" />
          </fieldset>

          <fieldset>
            <label htmlFor="admin-name">Admin Name</label>
            <input type="text" id="admin-name" name="admin-name" />
          </fieldset>
        </div>

        <div className={styles.wrap}>
          <fieldset>
            <label htmlFor="candidate">Candidate Address</label>
            <input type="text" id="candidate" name="candidate" />
          </fieldset>

          <fieldset>
            <label htmlFor="candidate-name">Candidate Name</label>
            <input type="text" id="candidate-name" name="candidate-name" />
          </fieldset>
        </div>

        <div className={styles.wrap}>
          <fieldset>
            <label>Start Time</label>
            <input type="datetime-local" />
            <p></p>
          </fieldset>

          <fieldset>
            <label>End Time</label>
            <input type="datetime-local" />
            <p></p>
          </fieldset>
        </div>

        <fieldset className={styles.check}>
          <p>{false && <BsCheck />}</p>
          <small>I accept and agree term conditions for VoteNexus.</small>
        </fieldset>

        <button>Create Voting</button>
      </form>
    </div>
  );
};

export default CreateVote;
