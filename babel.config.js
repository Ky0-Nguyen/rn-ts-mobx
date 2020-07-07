module.exports = {
  presets: ['mobx', 'module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.ios.ts', '.android.ts'],
        alias: {
          '@assets': './src/assets/index',
          '@components': './src/components',
          '@types': ['./src/types/index'],
          '@constants': './src/constants/index',
          '@constants': './src/constants',
          '@models': './src/models/index',
          '@models': './src/models',
          '@configuration': './src/configuration/index',

          '@utils': './src/utils/index',
          utils: './src/utils',

          screens: './src/screens',
          services: './src/services',
          themes: './src/themes',
          common: './src/common',
          animations: './src/animations',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}
