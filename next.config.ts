import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 匹配所有域名
      },
      {
        protocol: 'http',
        hostname: '**', // 匹配所有域名
      },
    ],
  }
};

export default nextConfig;
