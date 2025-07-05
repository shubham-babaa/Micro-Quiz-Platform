import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   env: {
    PUBLIC_API_BASE_URL: process.env.PUBLIC_API_BASE_URL,
  },
};

export default nextConfig;
