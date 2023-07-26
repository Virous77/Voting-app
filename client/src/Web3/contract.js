import Web3 from "web3";
import data from "./abi.json";

export const maticContract = "0xC71aF0f3b06cf8aCA13Bd236B04Cdc7e618D742c";
export const avaxContract = "0xe84BE40c726A7Ac157Df5733e08e504f175CB678";

const web3 = new Web3(window.ethereum);

export const web3Provider = () => {
  if (typeof window.ethereum !== "undefined") {
    return web3;
  }
  return null;
};

export function getContractInstance(name) {
  try {
    const contractInstance = new web3.eth.Contract(data, avaxContract);
    return contractInstance;
  } catch (error) {
    console.log(error);
  }
}
