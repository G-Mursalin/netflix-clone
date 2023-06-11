import Login from "@/components/Login/Login";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Netflix - SignIn</title>
        <meta
          name="description"
          content="Get DVDs by email plus instantly watch some movies on your Mac, PC or TV"
        />
      </Head>
      <Login />
    </section>
  );
};

export default index;
