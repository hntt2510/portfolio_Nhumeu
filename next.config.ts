import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    localPatterns: [
      { pathname: "/assets/**", search: "?v=real-v1" },
    ],
  },
};

export default nextConfig;
