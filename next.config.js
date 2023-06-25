/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/lists",
        destination: "https://books-api.nomadcoders.workers.dev/lists",
      },
    ];
  },
};

module.exports = nextConfig;
