import styles from "./Notification.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../store/globalContext";

const Notification = () => {
  const { state, handleSetNotification } = useGlobalContext();

  return (
    <div
      className={`${styles["notification"]}  ${
        state.status === "success"
          ? styles["success"]
          : state.status === "error"
          ? styles["error"]
          : ""
      }  `}
    >
      {state.message}{" "}
      <AiOutlineClose
        size={16}
        cursor="pointer"
        onClick={() => handleSetNotification({ status: "", message: "" })}
      />
    </div>
  );
};

export default Notification;
