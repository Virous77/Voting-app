import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    message: "",
    status: "",
    register: false,
    tab: "running",
  };
  const [state, setState] = useState(initialState);

  const handleSetNotification = ({ message, status }) => {
    setState({
      ...state,
      message,
      status,
      tab: status === "error" ? state.tab : "running",
    });
    if (message) {
      document.querySelector(".notification")?.classList.add("active");
    }
    setTimeout(() => {
      document.querySelector(".notification")?.classList.remove("active");
      setState({
        ...state,
        message: "",
        status: "",
        register: false,
        tab: status === "error" ? state.tab : "running",
      });
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
