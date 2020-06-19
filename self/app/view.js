import he from 'he'

export class View {
  constructor(rootSelector){
    const newField = document.querySelector(rootSelector + ' .new-todo')
    this.addEventListeners(newField)
  }

  render(items){
    items.forEach(item => this.addItemToList(item))
  }

  addEventListeners(newField) {
    newField.addEventListener('keypress', (ev) => {
      if (ev.key === 'Enter') {
        const text = ev.target.value
        const newItem = {description: text}

        const result = this.onAddItemHandler(newItem)
        if(result.message !== ""){
          alert(result.message)
        }
      }
    })
  }

  addItemToList(item){
    const newTodoEl = document.createElement('li')
    const label = document.createElement('label')
    label.innerHTML = he.encode(item.description)
    newTodoEl.appendChild(label) // <li> <label>text...</label> </li>
    document.querySelector('.todo-list').appendChild(newTodoEl)
  }

  registerOnAddItemHandler(onAddItemHandler){
    this.onAddItemHandler = onAddItemHandler
  }
}
