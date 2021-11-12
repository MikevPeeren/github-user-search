/** @type {import('next').NextConfig} */
const path = require("path");
const fs = require("fs");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  env: {
    noflash: fs.readFileSync("/noflash.js").toString(),
  },
};
