// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/event-spotlight-client',
    viewportWidth: 1440,
    viewportHeight: 700,

    defaultCommandTimeout: 8000,

    setupNodeEvents() {

    },
  },
});
