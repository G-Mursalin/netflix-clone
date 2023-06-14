import Layout from "@/components/Layout/Layout";
import Loading from "@/components/Loading/Loading";
import { magic } from "@/lib/magicClient";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check If is logged in or not
    (async () => {
      try {
        const isLogin = await magic.user.isLoggedIn();
        if (isLogin) {
          router.push("/");
        } else {
          router.push("/login");
        }
      } catch (error) {
        // setIsLoading(false);
        // router.push("/login");
      }
    })();
  }, []);

  //Listening for the route changed or error then loading to false
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeError", handleRouteChange);
    };
  }, [router]);

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
