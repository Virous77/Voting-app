import { TbLoader } from "react-icons/tb";
import styles from "./loader.module.scss";
import React from "react";

const Loader = ({ message }) => {
  return (
    <div className={styles.Loader}>
      <TbLoader className={styles.loaderIcon} />
      {message}
    </div>
  );
};

export default Loader;
