'use strict'

export default class Store {
  constructor(name) {
    this.name = name
    this.localStorage = window.localStorage
    this._load()
  }

  _persist() {
    return new Promise(resolve => {
      this.localStorage.setItem(this.name, JSON.stringify(this.items))
      resolve()
    })
  }

  _load() {
    this.items = JSON.parse(this.localStorage.getItem(this.name) || '[]')
  }

  add(item) {
    this.items.push(item)
    return this._persist()
  }

  remove(id) {
    let indexToRemove = this.items.findIndex(item => item.id === id)
    this.items.splice(indexToRemove, 1)
    return this._persist()
  }

  all() {
    return Promise.resolve(this.items)
  }
}
