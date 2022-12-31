const { withExpo } = require('@expo/next-adapter')
const withTM = require('next-transpile-modules')(['react-native-web'])
const withImages = require('next-images')
const withFonts = require('next-fonts')

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(spec|test).[jt]s?(x)$/,
        loader: 'ignore-loader'
      }
    );
    return config;
  },
}

module.exports = () => {
	const plugins = [withImages, withFonts, withTM, withExpo];
	return plugins.reduce((config, plugin) => plugin(config), nextConfig);
};
