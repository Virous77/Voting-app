import styles from "./user.module.scss";
import { BsCheck } from "react-icons/bs";
import { useVote } from "../../store/voteContext";

const CreateVote = () => {
  const { createVote, setCreateVote, handleChange, handleCreateVote } =
    useVote();
  const {
    admin,
    admin_name,
    candidate,
    candidate_name,
    start_time,
    end_time,
    term,
  } = createVote;

  return (
    <div className={styles.createVote}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.wrap}>
          <fieldset>
            <label htmlFor="admin">Admin Address</label>
            <input
              type="text"
              id="admin"
              name="admin"
              value={admin}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="admin_name">Admin Name</label>
            <input
              type="text"
              id="admin_name"
              name="admin_name"
              value={admin_name}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div className={styles.wrap}>
          <fieldset>
            <label htmlFor="candidate">Candidate Address</label>
            <input
              type="text"
              id="candidate"
              name="candidate"
              value={candidate}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="candidate_name">Candidate Name</label>
            <input
              type="text"
              id="candidate_name"
              name="candidate_name"
              value={candidate_name}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div className={styles.wrap}>
          <fieldset>
            <label>Start Time</label>
            <input
              type="datetime-local"
              name="start_time"
              value={start_time}
              onChange={handleChange}
            />
            {!start_time && <p></p>}
          </fieldset>

          <fieldset>
            <label>End Time</label>
            <input
              type="datetime-local"
              name="end_time"
              value={end_time}
              onChange={handleChange}
            />
            {!end_time && <p></p>}
          </fieldset>
        </div>

        <fieldset className={styles.check}>
          <p onClick={() => setCreateVote({ ...createVote, term: !term })}>
            {term && <BsCheck color="var(--main-font-color)" />}
          </p>
          <small>I accept and agree term conditions for VoteNexus.</small>
        </fieldset>

        <button onClick={handleCreateVote}>Create Voting</button>
      </form>
    </div>
  );
};

export default CreateVote;
