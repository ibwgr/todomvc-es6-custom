<<<<<<< HEAD
import { View } from "./view.js"

new View ("#the-app")
=======
import { Store } from './store.js'
// import { Store } from './store.remote2.js'
import { View } from './view.js'
import { Controller } from './controller.js'

const view = new View('#the-app')
const store = new Store()
const controller = new Controller(view, store)

controller.start()
>>>>>>> 85b5d6c19cf82061a3ee12df0309fd8797b7cc7a
