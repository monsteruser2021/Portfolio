/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Explicitly disable image optimization
  },
};

export default nextConfig;
