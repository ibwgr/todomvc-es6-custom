import init from './selenium.helper'
import {until, Key} from 'selenium-webdriver'

const {driver, config, assert, test} = init()

import Index from './index.po'
const page = new Index(driver, config.target)

test.describe('Index', function() {

  test.beforeEach(function(){
    page.gotoIndex()
  })

  test.it('should show textfield', function(){
    driver.wait(until.elementLocated(page.newTodoSelector()))
  })

  test.describe('Create Todo', function(){

    test.it('should create a new item in the list', function(){
      driver.wait(until.elementLocated(page.newTodoSelector()))
      page.newTodoField().sendKeys('shopping', Key.ENTER)

      driver.wait(until.elementLocated(page.getItemSelector(0)))
      assert.becomes(page.getItem(0).getText(), 'shopping')
    })
  })

  after(function(){
    driver.quit()
  })
})
