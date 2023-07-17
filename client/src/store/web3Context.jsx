import { createContext, useState, useContext } from "react";
import { web3Provider } from "../Web3/contract";
import { BrowserProvider } from "ethers";

const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState("");
  const web3 = web3Provider();

  const handleConnect = async () => {
    if (web3) {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      console.log(provider);
    } else {
      console.log("cool");
    }
  };

  const handleDisconnect = () => {
    if (web3) {
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
