import styles from "./user.module.scss";
import { BsCheck } from "react-icons/bs";
import { useVote } from "../../store/voteContext";
import { useState } from "react";

const CreateVote = () => {
  const {
    createVote,
    setCreateVote,
    handleChange,
    handleCreateVote,
    candidate,
    setCandidate,
    setCandidateName,
    candidate_name,
  } = useVote();
  const { admin, admin_name, start_time, end_time, term } = createVote;
  const [count, setCount] = useState([0, 1]);

  const handleUpdate = ({ e, idx, name }) => {
    const updatedCandidate = [...candidate];
    const updateCandidateName = [...candidate_name];

    if (name === "candidate") {
      updatedCandidate[idx] = e;
      setCandidate(updatedCandidate);
    } else {
      updateCandidateName[idx] = e;
      setCandidateName(updateCandidateName);
    }
  };

  const handleFilter = (id) => {
    const newCount = count.filter((value, idx) => idx !== id);
    const newCandidateName = candidate_name.filter((value, idx) => idx !== id);
    const newCandidate = candidate.filter((value, idx) => idx !== id);
    setCount(newCount);
    setCandidateName(newCandidateName);
    setCandidate(newCandidate);
  };

  const handleAdd = () => {
    setCount([...count, 1]);
    setCandidateName([...candidate_name, ""]);
    setCandidate([...candidate, ""]);
  };

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

        <div className={styles.candidate}>
          {count.map((count, idx) => (
            <div className={styles.wrap} key={idx}>
              <fieldset>
                <label htmlFor="candidate">Candidate Address {idx + 1}</label>
                <input
                  type="text"
                  id="candidate"
                  value={candidate[idx]}
                  onChange={(e) =>
                    handleUpdate({ e: e.target.value, idx, name: "candidate" })
                  }
                />
              </fieldset>

              <fieldset>
                <div className={styles.label}>
                  <label htmlFor="candidate_name">
                    Candidate Name {idx + 1}
                  </label>

                  {idx + 1 >= 3 && (
                    <b onClick={() => handleFilter(idx)}>Remove</b>
                  )}
                </div>

                <input
                  type="text"
                  id="candidate_name"
                  name="candidate_name"
                  value={candidate_name[idx]}
                  onChange={(e) =>
                    handleUpdate({
                      e: e.target.value,
                      idx,
                      name: "candidate-name",
                    })
                  }
                />
              </fieldset>
            </div>
          ))}

          <div className={styles.add}>
            <button onClick={handleAdd}>Add</button>
          </div>
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
