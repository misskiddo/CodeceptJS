exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.airtransat.com/',
      smartWait: 10000,
      browser: 'chrome',
      restart: false,
      keepBrowserState: true,
      keepCookies: true
    }
  },
  include: {
    I: './steps_file.js',
    FlightSelection: './fragments/FlightSelection.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'airCanadaTest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {}

  }
}