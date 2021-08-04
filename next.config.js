const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['react-native-web'])
const withImages = require('next-images')
const withFonts = require('next-fonts')

const nextConfig = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(spec|test).[jt]s?(x)$/,
        loader: 'ignore-loader'
      }
    );
    return config;
  }
}

module.exports = withPlugins(
  [withImages, withFonts, withTM, [withExpo, { projectRoot: __dirname }]],
  nextConfig,
)
