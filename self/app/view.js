
export class View {
    constructor(rootSelector) {
        const newField = document.querySelector(rootSelector + " .new-todo");
        this.addEventlistener(newField);

    }


    addEventlistener(newField) {
        newField.addEventListener('keypress', (ev) => {
            console.log(ev)
            if (ev.key === 'Enter') {
//        console.log(newField.value)     // dies ist ein closure
//        console.log(ev.target.value)    //  kein closure mehr, da nicht auf die äussere Variable zugegriffen wird
//        console.log(this.value)         //  auch kein closure mehr, funktioniert jedoch nicht mit arrow function. Arrow function hat nie einen eigenen this context

                if (ev.target.value != "") {
                    const text = ev.target.value
                    const newTodoEl = document.createElement("li")
                    const label = document.createElement('label')
                    label.innerText = text
                    newTodoEl.appendChild(label)            //<li><label>
                    document.querySelector('.todo-list').appendChild(newTodoEl)
                    ev.target.value = ""

                    let existingItems = window.localStorage.getItem("todoItems")
                    if (existingItems === null){
                        existingItems = ""
                    }

                    let arrayExistingItems = existingItems.split(",")
                    arrayExistingItems.push(text)
                    existingItems = arrayExistingItems.join(",")
                    window.localStorage.setItem("todoItems", existingItems)
                }
            }
        })
    }
}






