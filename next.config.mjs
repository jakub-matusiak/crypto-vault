/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/assets',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
