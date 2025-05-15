/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devServer: {
    allowedDevOrigins: [
      'https://4723-202-166-170-126.ngrok-free.app',
    ],
  },
};

export default nextConfig;
