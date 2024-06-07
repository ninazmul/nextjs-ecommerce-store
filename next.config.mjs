/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pexels.com",
        pathname: "/photo/**",
      },
    ],
  },
};

export default nextConfig;
