export default class Controller{
    constructor(view, viewEvents, store){
        this.view = view
        this.store = store

        view.registerEventHandlers({
            [viewEvents.onAddItem]: this.addItem.bind(this),
            [viewEvents.onRemoveItem]: this.removeItem.bind(this)
        })

        view.renderItems(store.all())
    }

    addItem(item){
        this.store.insert(item)
        this.view.add(item)
    }

    removeItem(id){
        this.store.remove(id)
        this.view.remove(id)
    }
}