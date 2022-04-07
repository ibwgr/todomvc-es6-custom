import {until, Key} from 'selenium-webdriver'
import {describe, it, beforeEach, after} from 'mocha'

import init from './selenium.helper.mjs'
const {driver, config, assert} = init()

import Index from './index.po.mjs'
const page = new Index(driver, config.target)

describe('Index', () => {

  beforeEach(async () => {
    await page.gotoIndex()
  })

  after(async () => {
    await driver.quit()
  })

  xit('should show textfield', async () => {
    await driver.wait(until.elementLocated(page.newTodoSelector()))
  })

  describe('Create Todo', () => {

    it('should create a new item in the list', async () => {
      await driver.wait(until.elementLocated(page.newTodoSelector()))
      await page.newTodoField().sendKeys('shopping', Key.ENTER)

      await driver.wait(until.elementLocated(page.getItemSelector(0)))
      await assert.becomes(page.getItem(0).getText(), 'shopping')
    })
  })
})
