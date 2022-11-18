import Store from './store.local.mjs'
//import Store from './store.remote.await.mjs'
// import Store from './store.remote.promises.js'
import {events as viewEvents, View} from './view.mjs'
import Controller from './controller.mjs'

const view = new View('#the-app')
const store = new Store('todo-app-storage')
const ctrl = new Controller(view, viewEvents, store)

window.addEventListener('load', () => {
  ctrl.loadAndRender()
})
