const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const setupDriver = function(config){
  // dynamically get path of chrome binary
  // see https://stackoverflow.com/questions/36410283/node-js-complaining-that-the-chromedriver-could-not-be-found-on-the-current-pat
  chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

  return new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome().set('chromeOptions', {args: ['--headless']}))
    .usingServer(config.selenium.hub)
    .build();
};

exports.setupDriver = setupDriver;
