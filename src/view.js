'use strict'
import SiblingIterator from './sibling-iterator.js'

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

    [getElement](selector){
        return document.querySelector(this.rootSelector + ' ' + selector)
    }

    [onAddItem](item){
        return this.eventHandlers[events.onAddItem](item)
    }

    [onRemoveItem](item){
        return this.eventHandlers[events.onRemoveItem](item)
    }

    [bindEvents](){
        document.addEventListener('input', ({target})=>{
            this.resetMsgs(target)
        })

        this.$newTodo.addEventListener('change', ({target})=>{
            let validator = this[onAddItem]({id: Date.now(), title: target.value.trim()})
            this.renderMsgs(this.$newTodo, validator)

            if(!validator.hasErrors){
                this.$newTodo.value = ''
            }
        })

        this.$todoList.addEventListener('click', ({target})=>{
            if(target.classList.contains('destroy')){
                this[onRemoveItem](target.parentNode.dataset.id)
            }
        })
    }

    resetMsgs($el){
        /**
        function* itGen($ele){
            let sibling
            while((sibling = $ele.nextSibling) != null){
                yield sibling
            }
        }
        */
        for(let sibling of new SiblingIterator($el)){
            if(sibling.classList && sibling.classList.contains('error')){
                sibling.parentNode.removeChild(sibling)
            }
        }
    }

    renderMsgs($el, val){
        if(val.hasErrors){
            let [err] = val.errors
            let $msg = document.createElement('div')
            $msg.innerText = err.text
            $msg.classList.add(err.level)
            $el.parentNode.insertBefore($msg, $el.nextSibling)
        }
    }

    renderError(error){
        console.error('Fehler in TodoMVC App', error)
        let text = error

        if(error instanceof Response){
            text = `${error.status} ${error.statusText}`
        }

        this.renderMsgs(this.$newTodo, {
            hasErrors: true,
            errors: [
                {
                    text: `Allgemeiner Fehler (${text})`,
                    level: 'error'
                }
            ]
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
        this.$todoList.innerHTML = items.map(this.renderItem).join('')
    }

    renderItem(item){
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }

    remove(id){
        let elem = this.$todoList.querySelector(`[data-id='${id}']`)
        if(elem)
            this.$todoList.removeChild(elem)
    }

    add(item){
        let elem = document.createElement('div')
        let html = this.renderItem(item)
        elem.innerHTML = html
        this.$todoList.appendChild(elem.childNodes[0])
    }
}

export {View, events}