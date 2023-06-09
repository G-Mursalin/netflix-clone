import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import SectionCards from "@/components/Card/SectionCards";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getData, getPopularVideos } from "@/lib/fetchVideosData";
import { startFetchMyQuery } from "@/lib/db/hasura";

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  startFetchMyQuery();

  return (
    <>
      <Head>
        <title>Netflix - Clone</title>
        <meta
          name="description"
          content="Watch movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
        videoId="4zH5iYM4wJo"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" size="large" videos={disneyVideos} />
      </div>

      <div className={styles.sectionWrapper}>
        <SectionCards title="Travel" size="small" videos={travelVideos} />
      </div>

      <div className={styles.sectionWrapper}>
        <SectionCards
          title="Productivity"
          size="medium"
          videos={productivityVideos}
        />
      </div>

      <div className={styles.sectionWrapper}>
        <SectionCards title="Popular" size="small" videos={popularVideos} />
      </div>
    </>
  );
}

// Serverside Rendering (SSR)

export async function getServerSideProps() {
  // const disneyVideos = await getData("disney trailer");
  // const travelVideos = await getData("travel");
  // const productivityVideos = await getData("productivity");
  // const popularVideos = await getPopularVideos();

  return {
    props: {
      disneyVideos: [],
      travelVideos: [],
      productivityVideos: [],
      popularVideos: [],
    },
  };
}
