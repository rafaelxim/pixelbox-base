import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/criacao-de-sites",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
