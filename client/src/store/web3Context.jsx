import { createContext, useState, useContext, useEffect } from "react";
import { web3Provider } from "../Web3/contract";
import { getLocalData } from "../utils/utils";
import { useGlobalContext } from "./globalContext";
import { useMutation, useQuery } from "react-query";
import { getAPI, postAPI } from "../components/apis/apis";

const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userAddress: "",
    isLoggedIn: false,
    name: "",
    chain: "",
  });
  const { handleSetNotification, state, setState } = useGlobalContext();
  const [metamaskNotInstalled, setNotMetamaskInstalled] = useState(false);
  const web3 = web3Provider();

  const pocket = {
    name: user.name,
    wallet_address: user.userAddress,
    chain: user.chain,
  };

  const { mutate } = useMutation({
    mutationFn: (params) => {
      return postAPI({ userData: params, endPoints: "/user" });
    },
    onError: (data) => {
      console.log(data);
    },
    onSuccess: (data) => {
      localStorage.setItem("vId", JSON.stringify(user.userAddress));
      setUser({ ...user, isLoggedIn: true });
      setState({ ...state, register: false });
    },
  });

  const handleCreateUser = () => {
    mutate(pocket);
  };

  const { isLoading } = useQuery("user", {
    queryFn: () => {
      return getAPI({ endPoints: `/register/${String(user.userAddress)}` });
    },
    retry: false,
    enabled: user.userAddress ? true : false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      if (data.status) {
        localStorage.setItem("vId", JSON.stringify(user.userAddress));
        setUser({ ...user, isLoggedIn: true });
      } else {
        setState({ ...state, register: true });
      }
    },
  });

  const handleConnect = async () => {
    if (web3) {
      try {
        const chainId = await web3.eth.getChainId();
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setUser({ ...user, userAddress: accounts[0], chain: chainId });
      } catch (error) {
        handleSetNotification({
          message: error.message || "Something went wrong,Try again",
          status: "error",
        });
      }
    } else {
      setNotMetamaskInstalled(true);
    }
  };

  const handleDisconnect = () => {
    localStorage.clear();
    setUser({ ...user, isLoggedIn: false });
  };

  useEffect(() => {
    const id = getLocalData("vId");
    if (id) {
      setUser({ ...user, isLoggedIn: true });
    }
  }, [user.userAddress]);

  return (
    <Web3Context.Provider
      value={{
        handleConnect,
        handleDisconnect,
        user,
        metamaskNotInstalled,
        handleCreateUser,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
export default Web3Context;
