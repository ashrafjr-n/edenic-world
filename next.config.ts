import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [new URL("https://img.youtube.com/vi/**")],
  },
};

export default nextConfig;
