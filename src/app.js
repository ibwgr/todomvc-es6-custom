'use strict'

import Store from './store'
import View from './view'

const view = new View('#the-app')

window.addEventListener('load', () => {
    view.render()
})