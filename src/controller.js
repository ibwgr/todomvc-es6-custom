export default class Controller{
    constructor(view, viewEvents, store){
        this.view = view
        this.store = store

        view.registerEventHandlers({
            [viewEvents.onAddItem]: this.addItem.bind(this)
        })
    }

    addItem(item){
        this.store.insert(item)
        this.view.renderItems(this.store.all())
    }
}