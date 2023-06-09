import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import SectionCards from "@/components/Card/SectionCards";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getData } from "@/lib/fetch";

export default function Home() {
  const data = getData();

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
        videoId="215896"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" size="large" videos={data} />
      </div>

      <div className={styles.sectionWrapper}>
        <SectionCards title="Popular" size="medium" videos={data} />
      </div>
    </>
  );
}
