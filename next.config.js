/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         // hostname: "my-blob-store.public.blob.vercel-storage.com",
//         hostname:
//           "vercel.com/babatund-seguns-projects-5956ffd0/nextjs-food-project/stores/blob/store_ENWPNmTPN6tcgeVR",

//         port: "",
//       },
//     ],
//   },
// };

const nextConfig = {
  // distDir: "build",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "segun-nextjs-demo-users-image.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
