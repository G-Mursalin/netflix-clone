import { useRouter } from "next/router";
import React from "react";
import Modal from "react-modal";
import styles from "./video.module.css";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();

  const { videoId } = router.query;

  return (
    <div>
      <h1>This is video page {videoId}</h1>
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        overlayClassName={StyleSheet.overlay}
      >
        <div>Modal Body</div>
      </Modal>
    </div>
  );
};

export default Video;
