'use strict'

import Store from './store'
import {View, events as viewEvents} from './view'
import Controller from './controller'

const view = new View('#the-app')
const ctrl = new Controller(view, viewEvents)

window.addEventListener('load', () => {
    //view.render()
})