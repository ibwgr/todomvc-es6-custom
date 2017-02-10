export default class Controller{
    constructor(view, viewEvents){
        this.view = view

        view.registerEventHandlers({
            [viewEvents.onAddItem]: this.addItem
        })
    }

    addItem(item){
        console.log('going to add', item.title, 'to the storage')
    }
}