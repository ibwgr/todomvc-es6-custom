import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import chromedriver from 'chromedriver'
import test from 'selenium-webdriver/testing'
import default_config from './config.js'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
const {assert} = chai;

const setupDriver = function(config){
  // dynamically get path of chrome binary
  // see https://stackoverflow.com/questions/36410283/node-js-complaining-that-the-chromedriver-could-not-be-found-on-the-current-pat
  chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

  return new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome().set('chromeOptions', {args: ['--headless']}))
    .usingServer(config.selenium.hub)
    .build();
};

export default function init(config = default_config){
  let driver = setupDriver(config)
  return {
    driver,
    config,
    assert,
    test
  }
}
