const packageJson = require('../package.json');

module.exports = {
  stories: [{ directory: '../src', files: '**/*.stories.tsx', titlePrefix: `Version ${packageJson.version}` }],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
