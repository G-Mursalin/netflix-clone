import React from "react";
import styles from "./Banner.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const Banner = ({ title, subTitle, imgUrl, videoId }) => {
  const router = useRouter();

  const handleOnPlay = () => {
    router.push(`video/${videoId}`);
  };
  return (
    <section className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                src="/static/play_arrow.svg"
                alt="play icon"
                width={32}
                height={32}
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      ></div>
    </section>
  );
};

export default Banner;
