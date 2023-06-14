import { magic } from "@/lib/magicClient";
import { useState, useEffect } from "react";

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLogin(await magic.user.isLoggedIn());
        console.log("from Hook", await magic.user.isLoggedIn());
      } catch (error) {
        setIsLogin(false);
      }
    })();
  }, []);

  return [isLogin];
};

export default useLogin;
