// next.config.ts
const nextConfig = {
  headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' https://the-crafty.vercel.app/_vercel/insights;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
