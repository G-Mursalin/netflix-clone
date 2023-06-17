import { useRouter } from "next/router";
import VideoDetails from "@/components/VideoDetails/VideoDetails";

const Video = ({ videoData }) => {
  const router = useRouter();
  const { videoId } = router.query;

  return <VideoDetails videoData={videoData} videoId={videoId} />;
};

//Incremental Static Regeneration (ISR)
export async function getStaticProps() {
  const videoData = {
    title: "Hi there",
    publishTime: "1998-01-02",
    description:
      "lorm kifu ffigof offogfig mdjugjjf akfaiorioqpfo afkgafgqokfgoj fdlkgjfdskjg sflgjlsdfgksn ndsofgk orm kifu ffigof offogfig mdjugjjf akfaiorioqpfo  ",
    channelTitle: "XX-RR-023",
    viewCount: 230,
  };

  return {
    props: {
      videoData,
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
