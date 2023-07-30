import { createContext, useContext, useState } from "react";

const VoteContext = createContext();

export const VoteContextProvider = ({ children }) => {
  const [createVote, setCreateVote] = useState({
    admin: "",
    admin_name: "",
    start_time: "",
    end_time: "",
    term: false,
  });
  const [candidate, setCandidate] = useState(["", ""]);
  const [candidate_name, setCandidateName] = useState(["", ""]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateVote({ ...createVote, [name]: value });
  };

  const handleCreateVote = () => {
    console.log(createVote);
  };

  return (
    <VoteContext.Provider
      value={{
        createVote,
        setCreateVote,
        handleChange,
        handleCreateVote,
        candidate,
        setCandidate,
        candidate_name,
        setCandidateName,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};

export const useVote = () => useContext(VoteContext);

export default VoteContext;
