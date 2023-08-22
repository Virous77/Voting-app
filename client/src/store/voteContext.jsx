import { createContext, useContext, useState } from "react";
import { useGlobalContext } from "./globalContext";
import { useMutation } from "react-query";
import { postAPI } from "../components/apis/apis";

const VoteContext = createContext();

export const VoteContextProvider = ({ children }) => {
  const initialState = {
    admin: "",
    admin_name: "",
    start_time: "",
    end_time: "",
    term: false,
    vote_type: "public",
    vote_password: "",
  };
  const [createVote, setCreateVote] = useState(initialState);
  const [candidate, setCandidate] = useState(["", ""]);
  const [candidate_name, setCandidateName] = useState(["", ""]);
  const { handleSetNotification, setState, state } = useGlobalContext();

  const { mutate } = useMutation({
    mutationFn: (pocket) => {
      return postAPI({ userData: pocket, endPoints: "/vote" });
    },
    onError: (data) => {
      handleSetNotification({ message: data.message, status: "error" });
    },
    onSuccess: () => {
      console.log("cool");
      handleSetNotification({ message: "Voting created successfully." });
      setState({ ...state, tab: "running" });
      setCreateVote(initialState);
      setCandidate(["", ""]);
      setCandidateName(["", ""]);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateVote({ ...createVote, [name]: value });
  };

  const handleCreateVote = () => {
    if (createVote.vote_type === "private") {
      if (
        !createVote.vote_password.trim() ||
        createVote.vote_password.length < 5
      ) {
        return handleSetNotification({
          message: "Password is required and length must be five and more",
          status: "error",
        });
      }
    }

    const createCandidate = candidate.map((value, idx) => {
      const data = {
        candidate: candidate_name[idx],
        candidate_address: value,
      };
      return data;
    });

    const { admin_name, admin, ...rest } = createVote;

    if (
      createCandidate.find(
        (value) =>
          value.candidate.trim() === "" || value.candidate_address.trim() === ""
      )
    )
      return handleSetNotification({
        message: "Candidate Name or address can't be empty.",
        status: "error",
      });

    if (!createVote.term)
      return handleSetNotification({
        message: "Term and conditions acceptance is required.",
        status: "error",
      });

    const originalTimestamp = createVote.start_time;
    const oneDayMilliseconds = 24 * 60 * 60 * 1000;
    const newTimestamp = originalTimestamp + oneDayMilliseconds;

    if (createVote.end_time < newTimestamp)
      return handleSetNotification({
        message: "Voting duration must be minimum 24HR.",
        status: "error",
      });

    const data = {
      admin_address: createVote.admin,
      admin: createVote.admin_name,
      ...rest,
      start_time: new Date(rest.start_time),
      end_time: new Date(rest.end_time),
      start_date: new Date(rest.start_time).getDate(),
      end_date: new Date(rest.end_time).getDate(),
      for_vote: createCandidate,
    };

    mutate(data);
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
