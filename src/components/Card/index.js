import React from "react";
import App from "../../App";
import styles from "./Card.module.scss";

const Card = ({ users }) => {
  return (
    <div className={styles.cardClient}>
      <div className={styles.userPicture}>
        <img src="/images/man.png" alt="avatar" />
      </div>
      <p className={styles.nameClient}>
        {users.name}
        <span>{users.gender}</span>
      </p>
    </div>
  );
};

export default Card;
