import { createContext, useState, useContext, useEffect } from "react";
import { web3Provider } from "../Web3/contract";
import { getLocalData } from "../utils/utils";
import { useGlobalContext } from "./globalContext";

const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ userAddress: "", isLoggedIn: false });
  const { handleSetNotification } = useGlobalContext();
  const [metamaskNotInstalled, setNotMetamaskInstalled] = useState(false);
  const web3 = web3Provider();

  const handleConnect = async () => {
    if (web3) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setUser({ ...user, userAddress: accounts[0], isLoggedIn: true });
        localStorage.setItem("vId", JSON.stringify(accounts[0]));
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
      value={{ handleConnect, handleDisconnect, user, metamaskNotInstalled }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
export default Web3Context;
