import videosData from "@/data/videos.json";

export const getData = () => {
  return videosData.items.map((val) => {
    return {
      imgUrl: val.snippet.thumbnails.high.url,
      title: val.snippet.title,
      id: val.id.videoId,
    };
  });
};
