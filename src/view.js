const getElement = Symbol()
const onAddItem = Symbol()
const bindEvents = Symbol()
const noop = ()=>{}

export default class View {

    constructor(rootSelector){
        this.rootSelector = rootSelector
        this.$newTodo = this[getElement]('.new-todo')
        this.$todoList = this[getElement]('.todo-list')

        this.eventHandlers = {
            onAddItem: noop
        }

        this[bindEvents]()
    }

    [getElement](root){
        return document.querySelector(this.rootSelector + ' ' + root)
    }

    [onAddItem](item){
        this.eventHandlers.onAddItem(item)
    }

    [bindEvents](){
        this.$newTodo.addEventListener('change', ({target})=>{
            let title = target.value.trim()
            this[onAddItem]({title})
        })
    }

    registerEventHandlers(handlers){
        for(let event in handlers){
            if(this.eventHandlers[event]){
                this.eventHandlers[event] = handlers[event];
            }
        }
    }
}