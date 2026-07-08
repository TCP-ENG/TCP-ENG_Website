/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site deploys directly to Cloudflare Pages
  // (no Node server required). Build output lands in ./out
  output: "export",
  // Cloudflare Pages serves static files; disable the Next image optimizer
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html for clean URLs
  trailingSlash: true,
};

export default nextConfig;
