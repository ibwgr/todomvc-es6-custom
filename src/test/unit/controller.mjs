import assert from 'assert'
import s from 'sinon'
const {spy} = s
import Controller from '../../app/controller.mjs'
import Store from '../../app/store.remote.promises.mjs'
import {events} from '../../app/view.mjs'

describe('Controller', function() {
  describe('makeValidatorObject()', function() {
    beforeEach(function(){
      this.store = new Store()
      this.view = {
        registerEventHandlers: spy()
      }
    })

    it('should return hasErrors=true, only if any message with level error', function() {
      const ctrl = new Controller(this.view, events, this.store)

      let val = ctrl.makeValidatorObject([{level:'error'}, {level:'info'}])
      assert.equal(val.hasErrors, true)

      val = ctrl.makeValidatorObject([, {level:'info'}])

      assert.equal(val.hasErrors, false)
    })
  })
})

