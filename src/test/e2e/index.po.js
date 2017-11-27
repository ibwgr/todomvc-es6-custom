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

  getItemSelector(idx){
    return By.css(`.todo-list > li:nth-child(${idx+1})`)
  }

  getItem(idx){
    return this.driver.findElement(this.getItemSelector(idx))
  }
}
