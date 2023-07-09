import Web3 from "web3";

export const maticContract = "0xC71aF0f3b06cf8aCA13Bd236B04Cdc7e618D742c";

const web3 = new Web3(window.ethereum);

export const web3Provider = () => {
  if (typeof window.ethereum !== "undefined") {
    return web3;
  }
  return null;
};
