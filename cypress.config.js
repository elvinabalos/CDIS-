const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'http://localhost/', // local server
    // baseUrl: 'https://ebc-test.bonfiretechsol.com/' // ebc test server
    

  },
  // experimentalSessionandOrigin: true
});

// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:3000/#/',
//   },
// })
