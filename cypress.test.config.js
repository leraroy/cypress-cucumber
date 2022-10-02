const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );
  return config;
};

module.exports = defineConfig({
  defaultCommandTimeout: 10000, 
  viewportHeight:1000,
  viewportWidth:1000,

  retries: {
    openMode: 2,
    runMode: 1,
  },

  e2e: {
    setupNodeEvents,
    specPattern: '**/*.feature',
    baseUrl: 'https://telnyx.com',
    excludeSpecPattern: ['*.js'],
  },
});