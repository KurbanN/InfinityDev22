/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isUserGithubIoSite = Boolean(repo?.endsWith(".github.io"))
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repo && !isUserGithubIoSite
    ? `/${repo}`
    : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath
    ? { basePath, assetPrefix: `${basePath}/` }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
