/* eslint-disable no-undef */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@src': './src',
          '@constants': './src/constants',
          '@screen': './src/screen',
          '@assets': './src/assets',
          '@language': './src/language',
          '@navigation': './src/navigation',
          '@theme': './src/theme',
          '@redux': './src/redux',
          '@common': './src/common',
          '@component': './src/component',
        },
      },
    ],
  ],
};
