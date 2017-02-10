export default class Controller{
    constructor(view){
        this.view = view

        view.registerEventHandlers({
            onAddItem: this.addItem
        })
    }

    addItem(item){
        console.log('going to add', item.title, 'to the storage')
    }
}