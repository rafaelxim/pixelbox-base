import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/criacao-de-sites",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "/blog/page/1",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
