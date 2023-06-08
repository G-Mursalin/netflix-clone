import Banner from "@/components/Banner/Banner";
import Head from "next/head";

export default function Home() {
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
    </>
  );
}
