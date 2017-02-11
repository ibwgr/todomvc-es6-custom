const getElement = Symbol()
const bindEvents = Symbol()
const onAddItem = Symbol()
const onRemoveItem = Symbol()
const noop = ()=>{}
const events = {
    onAddItem: "called when add item action was triggered",
    onRemoveItem: "called when item remove action was triggered"
}

class View {

    constructor(rootSelector){
        this.rootSelector = rootSelector
        this.$newTodo = this[getElement]('.new-todo')
        this.$todoList = this[getElement]('.todo-list')

        this.eventHandlers = {
            [events.onAddItem]: noop,
            [events.onRemoveItem]: noop
        }

        this[bindEvents]()
    }

    [getElement](root){
        return document.querySelector(this.rootSelector + ' ' + root)
    }

    [onAddItem](item){
        this.eventHandlers[events.onAddItem](item)
    }

    [onRemoveItem](item){
        this.eventHandlers[events.onRemoveItem](item)
    }

    [bindEvents](){
        this.$newTodo.addEventListener('change', ({target})=>{
            let title = target.value.trim()
            if(title.length)
                this[onAddItem]({id: Date.now(), title})
            this.$newTodo.value = ''
        })

        this.$todoList.addEventListener('click', ({target})=>{
            if(target.classList.contains('destroy')){
                this[onRemoveItem](target.parentNode.dataset.id)
            }
        })
    }

    registerEventHandlers(handlers){
        for(let event in handlers){
            if(this.eventHandlers[event]){
                this.eventHandlers[event] = handlers[event];
            }
        }
    }

    renderItems(items){
        this.$todoList.innerHTML = items.map((item)=>`
            <li data-id="${item.id}">
                <label>${item.title}</label>
                <button class="destroy"></button>
            </li>`)
            .join('')
    }

    remove(id){
        let elem = this.$todoList.querySelector(`[data-id='${id}']`)
        if(elem)
            this.$todoList.removeChild(elem)
    }
}

export {View, events}