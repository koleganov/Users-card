import React from "react";
import styles from "./Card.module.scss";

const Card = ({ id, name, gender, image, status, email, info }) => {
  const onClickCard = () => {
    info({ id, name, gender, image, status, email });
  };

  return (
    <div className={styles.cardClient} onClick={onClickCard}>
      <div className={styles.userPicture}>
        <img src={image} alt="avatar" />
      </div>
      <p className={styles.nameClient}>{name}</p>
      <span>{gender}</span>
    </div>
  );
};

export default Card;
