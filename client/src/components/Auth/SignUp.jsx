import React from "react";
import { useWeb3 } from "../../store/web3Context";

const SignUp = () => {
  const { handleCreateUser } = useWeb3();
  return <div onClick={handleCreateUser}>SignUp</div>;
};

export default SignUp;
