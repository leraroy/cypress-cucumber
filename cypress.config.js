const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter=require('@shelex/cypress-allure-plugin/writer');

const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
    allureWriter(on,config),  
  );
  return config;
};

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  video: false,
  chromeWebSecurity: false,
  fixturesFolder: false,
  e2e: {
    env:{
      allureReuseAfterSpec: true
    },
    specPattern: '**/*.feature',
    baseUrl: 'https://telnyx.com',
    excludeSpecPattern: ['*.js'],
    setupNodeEvents,
  },
});