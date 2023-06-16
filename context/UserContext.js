import { magic } from "@/lib/magicClient";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUserLogin, setIsUserLogin] = useState(false);

  const getDidToken = async (email) => {
    return await magic.auth.loginWithMagicLink({
      email,
    });
  };

  const getUserData = async () => {
    try {
      const { email } = await magic.user.getMetadata();
      setUser({ email });
    } catch (err) {
      console.log("Error from getUserData", err);
    }
  };

  const getUserIsLoggedIn = async () => {
    try {
      setIsUserLogin(await magic.user.isLoggedIn());
    } catch (error) {
      setIsUserLogin(false);
    }
  };

  const userSignOut = async () => {
    return await magic.user.logout();
  };

  const context = {
    user,
    isUserLogin,
    setIsUserLogin,
    setUser,
    getDidToken,
    getUserData,
    getUserIsLoggedIn,
    userSignOut,
  };

  useEffect(() => {
    getUserIsLoggedIn();
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
