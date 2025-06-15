import { codeInspectorPlugin } from 'code-inspector-plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    reactCompiler: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: config => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }))
    return config
  },
}

export default nextConfig
