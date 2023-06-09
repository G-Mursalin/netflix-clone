import React, { useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = (props) => {
  // Destructing Props
  const {
    imgUrl = "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    size = "medium",
  } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  //   Handle Image Error
  const handleOnImageError = () => {
    setImgSrc(
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80"
    );
  };

  return (
    <div className={styles.container}>
      card
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`${classMap[size]} ${styles.imgMotionWrapper}`}
      >
        <Image
          src={imgSrc}
          alt="image"
          fill={true}
          onError={handleOnImageError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
};

export default Card;
