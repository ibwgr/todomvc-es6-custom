import webdriver from 'selenium-webdriver'
const {By} = webdriver

export default class Index{
  constructor(driver, url){
    this.driver = driver
    this.url = url
  }

  gotoIndex(){
    this.driver.navigate().to(this.url)
  }

  newTodoSelector(){
    return By.css('.new-todo')
  }

  newTodoField(){
    return this.driver.findElement(this.newTodoSelector())
  }

  getItem(idx){
    return this.driver.findElement(this.getItemSelector(idx))
  }

  getItemSelector(idx){
    return By.css(`.todo-list > li:nth-child(${idx+1})`)
  }
}
