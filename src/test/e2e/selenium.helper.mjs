import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome.js'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import config from './config.mjs'

chai.use(chaiAsPromised)
const {assert} = chai

const setupDriver = function () {
  webdriver.promise.USE_PROMISE_MANAGER = false

  const options = new chrome.Options().addArguments(
    'disable-gpu',
    'ignore-certificate-errors',
    'no-sandbox',
    'window-size=1420,800',
    'disable-extensions',
    'disable-dev-shm-usage'
  )

  if (process.env.CI) {
    options.addArguments('headless')
  }

  return new webdriver.Builder()
    .setChromeOptions(options)
    .forBrowser('chrome')
    .build()
}

export default function init(){
  return {
    assert,
    config,
    driver: setupDriver()
  }
}
