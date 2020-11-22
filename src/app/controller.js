export default class Controller{
    constructor(view, viewEvents, store){
        this.view = view
        this.store = store

        view.registerEventHandlers({
            [viewEvents.onAddItem]: item => this.addItem(item),
            [viewEvents.onRemoveItem]: item => this.removeItem(item)
        })
    }

    async loadAndRender(){
      try{
        const items = await this.store.all()
        this.view.renderItems(items)
      } catch (e) {
        this.view.renderError(e)
      }
    }

    async addItem(item) {
      let val = this.makeValidatorObject(this.validateNewItem(item));
      if (!val.hasErrors) {
        const {id: newId} = await this.store.add(item)
        item.id = newId
        this.view.add(item)
      }
      return val
    }

    async removeItem(id) {
      await this.store.remove(id)
      this.view.remove(id)
    }

    validateNewItem(item){
        let msgs = []
        if(item.description.trim().length === 0){
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
