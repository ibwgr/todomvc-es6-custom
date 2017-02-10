'use strict'

import Store from './store'
import View from './view'
import Controller from './controller'

const view = new View('#the-app')
const ctrl = new Controller(view)

window.addEventListener('load', () => {
    //view.render()
})