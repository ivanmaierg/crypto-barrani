const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@snek-at/storybook-addon-chakra-ui'
  ],
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.resolve(__dirname, '..'), 'node_modules'],
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        }
      }
    };
  }
};