import videosData from "@/data/videos.json";

export const getData = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    if (data?.error) {
      return [];
    }

    return data.items.map((val) => {
      return {
        imgUrl: val.snippet.thumbnails.high.url,
        title: val.snippet.title,
        id: val.id.videoId || val.id.channelId,
      };
    });
  } catch (error) {
    return [];
  }
};
