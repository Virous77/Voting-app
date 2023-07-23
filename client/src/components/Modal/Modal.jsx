import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

export const Modal = ({ isOpen, onClose, children, classStyle }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles["modal-main"]} onClick={onClose}>
      <div
        className={classStyle ? styles[classStyle] : styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
