import { createContext, useState, useContext } from "react";
import { web3Provider } from "../Web3/contract";

const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState("");
  const web3 = web3Provider();

  const handleConnect = async () => {
    if (web3) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setUserAddress(accounts[0]);
    } else {
    }
  };

  console.log(userAddress);

  const handleDisconnect = () => {
    if (window.ethereum && window.ethereum.disconnect) {
      window.ethereum.disconnect();
      console.log("Disconnected from provider.");
    } else {
      console.log("No Ethereum provider detected.");
    }
  };

  return (
    <Web3Context.Provider value={{ handleConnect, handleDisconnect }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
export default Web3Context;
