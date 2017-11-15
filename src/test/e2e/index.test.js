const webdriver = require('selenium-webdriver');
const $q = require('q');
const {setupDriver} = require('./selenium.helper');

const {By, until} = webdriver;
const driver = setupDriver({
  selenium:{
    hub: 'http://localhost:4444/wd/hub'
  }
});

describe('E2E Index', function() {

  it('should show textfield', function (done) {
    driver.navigate().to('http://localhost:8008/build');

    driver.wait(until.elementLocated(By.css('.new-todo')));

    driver.wait($q.resolve()).then(done);
  });

  afterEach(function(){
    driver.quit();
  });
});
