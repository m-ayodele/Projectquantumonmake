import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  devIndicators: false,
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^figma:asset\//,
        (resource: { request: string }) => {
          resource.request = path.resolve(
            process.cwd(),
            'src/assets',
            resource.request.replace('figma:asset/', '')
          )
        }
      )
    )
    return config
  },
}

export default nextConfig
