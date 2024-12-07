import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    console.log("Rewrites Config Loaded");
    return [
      {
        source: "/",
        destination: "/static-html/index.html",
      },
      {
        source: "/blog",
        destination: "/static-html/blog.html",
      },
    ];
  },
};

export default nextConfig;
