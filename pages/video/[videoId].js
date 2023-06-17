import { useRouter } from "next/router";
import VideoDetails from "@/components/VideoDetails/VideoDetails";
import { getVideoById } from "@/lib/fetchVideosData";

const Video = ({ videoData }) => {
  const router = useRouter();
  const { videoId } = router.query;

  return <VideoDetails videoData={videoData} videoId={videoId} />;
};

//Incremental Static Regeneration (ISR)
export async function getStaticProps(context) {
  const videoData = await getVideoById(context.params.videoId);

  return {
    props: {
      videoData: videoData[0],
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));

  return { paths, fallback: "blocking" };
}

export default Video;
