export default class View {
    constructor(rootSelector){
        this.rootSelector = rootSelector
        this.$newTodo = this._getElement('.new-todo')
        this.$todoList = this._getElement('.todo-list')

        this.eventHandlers = {
            onAddItem: ()=>{}
        }

        this._bindEvents()
    }

    _getElement(root){
        return document.querySelector(this.rootSelector + ' ' + root)
    }

    _onAddItem(item){
        this.eventHandlers.onAddItem(item)
    }

    _bindEvents(){
        this.$newTodo.addEventListener('change', ({target})=>{
            let title = target.value.trim()
            this._onAddItem({title})
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