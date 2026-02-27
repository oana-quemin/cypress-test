const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 90000,
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    testIsolation: false,
    viewportWidth: 1440,
    viewportHeight: 900
  }
});
