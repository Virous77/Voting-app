import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState({
    message: "",
    status: "",
    register: false,
  });

  const handleSetNotification = ({ message, status }) => {
    setState({ ...state, message, status });
    if (message) {
      document.querySelector(".notification")?.classList.add("active");
    }
    setTimeout(() => {
      document.querySelector(".notification")?.classList.remove("active");
      setState({ ...state, message: "", status: "" });
    }, 3000);
  };

  return (
    <GlobalContext.Provider value={{ handleSetNotification, state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalContext;
