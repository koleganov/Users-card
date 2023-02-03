import React from "react";
import styles from "./Card.module.scss";

const Card = ({name, gender, image, info}) => {

  const onClickCard = () => {
    info({name, gender, image});
  }

  return (
    <div className={styles.cardClient} onClick={onClickCard}>
      <div className={styles.userPicture}>
        <img src={image} alt="avatar" />
      </div>
      <p className={styles.nameClient}>
       {name}
        <span>{gender}</span>
      </p>
    </div>
  );
};

export default Card;
