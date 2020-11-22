<<<<<<< HEAD
export class View {

    constructor(rootSelector) {

        const newField = document.querySelector(rootSelector + " .new-todo")

        this.addEvenListener(newField)


        console.log(newField)

        addEventListener(newField)
        {
            newField.addEventListener("Keypress", (ev) => {
                if (ev.key === "Enter") {

//        console.log(newField.value) // closure
//                console.log(ev.target.value) // kein closure mehr --> wird meistens benötigt
                    // console.log(this.value) // this ist ev. target --> wird nicht viel benötigt

                    const text = ev.target.value
                    const newTodoEl = document.createElement("li")

                    const label = document.createElement("label")

                    label.innerText = text

                    newTodoEl.appendChild(label) // <li> <label>text... </label> </li>
                    document.querySelector(".todo-list").appendChild(newTodoEl)

                    let existingItems = window.localStorage.getItem("todoitems")
                    if (existingItems == null){
                        existingItems = []
                    }

                    existingItems.push(text)


                    window.localStorage.setItem("todoItems", [text])

                }
            })
        }
    }
=======
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
>>>>>>> 85b5d6c19cf82061a3ee12df0309fd8797b7cc7a
}
