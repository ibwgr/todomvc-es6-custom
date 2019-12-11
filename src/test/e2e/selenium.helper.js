import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import default_config from './config.js'
import chai from 'chai'

const {assert} = chai;

/*
* Documentation at https://seleniumhq.github.io/selenium/docs/api/javascript/index.html
* */

const setupDriver = function(config){
  webdriver.promise.USE_PROMISE_MANAGER = false
  const options = new chrome.Options()
    // .addArguments('headless')

  return new webdriver.Builder()
    .setChromeOptions(options)
    .forBrowser('chrome')
    .usingServer(config.selenium.hub)
    .build();
};

export default function init(config = default_config){
  let driver = setupDriver(config)
  return {
    config,
    driver,
    assert
  }
}
