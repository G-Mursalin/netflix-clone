import React from "react";
import styles from "./SectionCards.module.css";
import Card from "./Card";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((val, idx) => (
          <Card key={val.id} id={idx} imgUrl={val.imgUrl} size={size} />
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
