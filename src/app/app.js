// import Store from './store.local.js'
import Store from './store.remote.await.js'
// import Store from './store.remote.promises.js'
import {events as viewEvents, View} from './view.js'
import Controller from './controller.js'

const view = new View('#the-app')
const store = new Store('todo-app-storage')
const ctrl = new Controller(view, viewEvents, store)

window.addEventListener('load', () => {
  ctrl.loadAndRender()
})
