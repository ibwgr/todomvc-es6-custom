import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import chromedriver from 'chromedriver'
import $q from 'q'
import default_config from './config.js'

const setupDriver = function(config){
  // dynamically get path of chrome binary
  // see https://stackoverflow.com/questions/36410283/node-js-complaining-that-the-chromedriver-could-not-be-found-on-the-current-pat
  chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

  return new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome().set('chromeOptions', {args: ['--headless']}))
    .usingServer(config.selenium.hub)
    .build();
};

function async_it(driver, spec, runner){
  it(spec, function(done){
    runner.call(this)
    driver.wait($q.resolve()).then(done)
  })
}

export default function init(config = default_config){
  let driver = setupDriver(config)
  return {
    async_it: function(...args){
      async_it(driver, ...args)
    },
    driver,
    config
  }
}
