export class Store {
  constructor() {
    this.existingItems = []
  }

  loadAll() {
    const existingStorage = localStorage.getItem("items")
    this.existingItems = JSON.parse(existingStorage || "[]")
  }

  add(item) {
    this.existingItems.push(item)
    localStorage.setItem("items", JSON.stringify(this.existingItems))
  }

  getAll() {
    return this.existingItems
  }
}

