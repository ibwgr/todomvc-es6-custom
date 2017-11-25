import init from './selenium.helper'
import {until} from 'selenium-webdriver'

const {driver, async_it, config} = init()

import Index from './index.po'
const page = new Index(driver, config.target)

describe('Index', function() {

  async_it('should show textfield', function(){
    page.gotoIndex();
    driver.wait(until.elementLocated(page.newTodoSelector()))
  })

  afterEach(function(){
    driver.quit()
  })
})
