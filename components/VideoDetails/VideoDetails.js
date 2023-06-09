import React from "react";
import Modal from "react-modal";
import styles from "./VideoDetails.module.css";

Modal.setAppElement("#__next");

const VideoDetails = ({ videoData, videoId }) => {
  const { title, publishTime, description, channelTitle, viewCount } =
    videoData;

  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          className={styles.videoPlayer}
          id="ytplayer"
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
        {/* 
    <div className={styles.likeDislikeBtnWrapper}>
      <div className={styles.likeBtnWrapper}>
        <button onClick={handleToggleLike}>
          <div className={styles.btnWrapper}>
            <Like selected={toggleLike} />
          </div>
        </button>
      </div>
      <button onClick={handleToggleDislike}>
        <div className={styles.btnWrapper}>
          <DisLike selected={toggleDisLike} />
        </div>
      </button>
    </div> */}

        {/* Video Details */}
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={`${styles.subText} ${styles.subTextWrapper}`}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={`${styles.subText} ${styles.subTextWrapper}`}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VideoDetails;
