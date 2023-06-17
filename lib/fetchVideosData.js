export const getCommonVideos = async (URL) => {
  try {
    const BASE_URL = "youtube.googleapis.com/youtube/v3";

    const response = await fetch(
      `https://${BASE_URL}/${URL}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    // const data = { error: true };

    if (data?.error) {
      console.log(error);
      return [];
    }

    return data.items.map((val) => {
      return {
        imgUrl: val.snippet.thumbnails.high.url,
        title: val.snippet.title,
        id: val.id.videoId || val.id.channelId || val.id,
        description: val.snippet.description,
        publishTime: val.snippet.publishedAt,
        channelTitle: val.snippet.channelTitle,
        viewCount: val.statistics.viewCount || 0,
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

export const getVideoById = (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;

  return getCommonVideos(URL);
};
