export default {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/index.html",
      },
    ];
  },
};
