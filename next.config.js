const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
  //   config.resolve.alias["magic-sdk"] = path.resolve(
  //     __dirname,
  //     "node_modules/magic-sdk/dist/cjs/index.js"
  //   );
  //   return config;
  // },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
      },
    ],
  },
};

module.exports = nextConfig;
