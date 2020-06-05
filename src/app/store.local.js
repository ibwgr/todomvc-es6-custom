/**
 * Dieser Store funktioniert mit LocalStorage.
 *
 * Dieser Store verwendet Promises (nicht async await),
 * damit die Methoden add, remove, all die gleiche Signatur haben wie die entsprechenden Methoden
 * von store.remote.await und store.remote.promsies
 */
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
