import React from "react";
import styles from "./SectionCards.module.css";
import Card from "./Card";
import Link from "next/link";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((val, idx) => (
          <Link key={val.id} href={`/video/${val.id}`}>
            <Card id={idx} imgUrl={val.imgUrl} size={size} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
