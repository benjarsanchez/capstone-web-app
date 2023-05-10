/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/auth/register",
        destination: "http://15.223.120.64/auth/register",
      },
    ];
  },
};
