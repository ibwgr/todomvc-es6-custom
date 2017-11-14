'use strict'

import Store from './store.remote'
import {View, events as viewEvents} from './view'
import Controller from './controller'

const view = new View('#the-app')
const store = new Store('todo-app-storage')
const ctrl = new Controller(view, viewEvents, store)

window.addEventListener('load', () => {
    //view.render()
})