
export class Store {
  constructor() {
    this.existingItems = []
  }

  async loadAll(){
    const result = await fetch('http://localhost:4567/todo/items', {
      method: 'GET',
      headers: new Headers({'accept': 'application/json'})
    })
    if(result.status === 200){
      this.existingItems =  await result.json()
    }
  }

  add(item){
    this.existingItems.push(item)
    localStorage.setItem("items", JSON.stringify(this.existingItems))
  }

  getAll(){
    return this.existingItems
  }
}
