import React from "react";
import styles from "./loader.module.scss";

const Empty = ({ image, message }) => {
  return (
    <div className={styles.empty}>
      <img src={image} alt="Empty" />
      <small>{message}</small>
    </div>
  );
};

export default Empty;
