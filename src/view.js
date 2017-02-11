const getElement = Symbol()
const bindEvents = Symbol()
const onAddItem = Symbol()
const noop = ()=>{}
const events = {
    onAddItem: "called when item is added"
}

class View {

    constructor(rootSelector){
        this.rootSelector = rootSelector
        this.$newTodo = this[getElement]('.new-todo')
        this.$todoList = this[getElement]('.todo-list')

        this.eventHandlers = {
            [events.onAddItem]: noop
        }

        this[bindEvents]()
    }

    [getElement](root){
        return document.querySelector(this.rootSelector + ' ' + root)
    }

    [onAddItem](item){
        this.eventHandlers[events.onAddItem](item)
    }

    [bindEvents](){
        this.$newTodo.addEventListener('change', ({target})=>{
            let title = target.value.trim()
            if(title.length)
                this[onAddItem]({title})
            this.$newTodo.value = ''
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
        this.$todoList.innerHTML = items.map((item)=>`<li><label>${item.title}</label></li>`).join('')
    }
}

export {View, events}