// next.config.mjs
import { join } from 'path';

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add rule for handling .node files
    config.module.rules.push({
      test: /\.(node)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'node_modules/canvas/build/Release/' // Output path for the binary files
        }
      }
    });

    // Important: Return the modified config
    return config;
  },
};

export default nextConfig;
