import React from "react";
import { useWeb3 } from "../store/web3Context";

const HomePage = () => {
  const { handleCreateUser } = useWeb3();
  return <div onClick={handleCreateUser}>HomePage</div>;
};

export default HomePage;
