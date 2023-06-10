import videosData from "@/data/videos.json";

export const getCommonVideos = async (URL) => {
  try {
    const BASE_URL = "youtube.googleapis.com/youtube/v3";

    const response = await fetch(
      `https://${BASE_URL}/${URL}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    if (data?.error) {
      return [];
    }

    return data.items.map((val) => {
      return {
        imgUrl: val.snippet.thumbnails.high.url,
        title: val.snippet.title,
        id: val.id.videoId || val.id.channelId || val.id,
      };
    });
  } catch (error) {
    return [];
  }
};

export const getData = (searchQuery) => {
  const URL = `search?part=snippet&maxResults=25&regionCode=US&q=${searchQuery}`;
  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US";
  return getCommonVideos(URL);
};