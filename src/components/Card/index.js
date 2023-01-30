import React from "react";

import styles from "./Card.module.scss";

const Card = ({ name, gender }) => {
  return (
    <div class={styles.cardClient}>
      <div class={styles.userPicture}>
        <img src="/images/woman.jpg" alt="avatar" />
      </div>
      <p class={styles.nameClient}>
        {name}
        <span>{gender}</span>
      </p>
    </div>
  );
};

export default Card;
