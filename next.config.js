/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["ui-avatars.com"],
  },
};

module.exports = nextConfig,
{
  env: {
    API_ENDPOINT: 'careeryze-backend.vercel.app' //replace this with your backend API endpoint URL
  }
}