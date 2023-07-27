import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Modal.module.scss";

const ModalHeader = ({ name, onClose }) => {
  return (
    <header className={styles["modal-header"]}>
      <h2>{name}</h2>

      <button style={{ background: "var(--main-font-color)" }}>
        <AiOutlineClose
          cursor="pointer"
          size={20}
          onClick={onClose}
          color="var(--secondary-font-color)"
        />
      </button>
    </header>
  );
};

export default ModalHeader;
