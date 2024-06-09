/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.wixstatic.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
        pathname: "/photo/**",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
};

export default nextConfig;
