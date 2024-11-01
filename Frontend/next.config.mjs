/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // trailingSlash: true,
};

export default nextConfig;

// const nextConfig = {
//     webpack: (config) => {
//         config.module.rules.push({
//             test: /\.xlsx$/,
//             use: [
//                 {
//                     loader: 'file-loader',
//                     options: {
//                         name: '[name].[ext]',
//                     },
//                 },
//             ],
//         });
//         return config;
//     },
// };