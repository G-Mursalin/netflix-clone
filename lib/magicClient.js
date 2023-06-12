import { Magic } from "magic-sdk";

const createMagic = (API_KEY) => {
  return (
    typeof window !== "undefined" &&
    new Magic(API_KEY, {
      network: "mainnet",
    })
  );
};

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
