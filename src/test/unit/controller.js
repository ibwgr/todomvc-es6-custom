'use strict'

import {assert} from 'chai'
import {spy} from 'sinon'
import Controller from '../../app/controller'
import Store from '../../app/store.remote'
import {View, events} from '../../app/view'

describe('Controller', function() {
  describe('makeValidatorObject()', function() {
    beforeEach(function(){
      this.store = new Store()
      this.view = {
        registerEventHandlers: spy()
      }
    })

    it('should return hasErrors=true, only if any with level error', function() {
      const ctrl = new Controller(this.view, events, this.store)

      let val = ctrl.makeValidatorObject([{level:'error'}, {level:'info'}])

      assert.equal(true, val.hasErrors)

      val = ctrl.makeValidatorObject([, {level:'info'}])

      assert.equal(false, val.hasErrors)
    })
  })
})

