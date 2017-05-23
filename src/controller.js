'use strict'
export default class Controller{
    constructor(view, viewEvents, store){
        this.view = view
        this.store = store

        view.registerEventHandlers({
            [viewEvents.onAddItem]: this.addItem.bind(this),
            [viewEvents.onRemoveItem]: this.removeItem.bind(this)
        })

        store.all()
        .then(view.renderItems.bind(view))
        .catch(view.renderError.bind(view))
    }

    addItem(item){
        let val = this.makeValidatorObject(this.validateNewItem(item));
        if(!val.hasErrors){
            this.store.add(item)
                .then(this.view.add.bind(this.view, item))
        }
        return val
    }

    removeItem(id){
        this.store.remove(id)
        this.view.remove(id)
    }

    validateNewItem(item){
        let msgs = []
        if(item.title.trim().length === 0){
            msgs.push({text: 'Du musst schon was tun!', level: 'error'})
        }
        return msgs
    }

    makeValidatorObject(msgs){
        return {
            hasErrors: msgs.some(m=>m.level === 'error'),
            errors: msgs.filter(m=>m.level === 'error'),
            msgs
        } 
    }
}