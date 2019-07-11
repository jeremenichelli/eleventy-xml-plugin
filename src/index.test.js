import test from 'ava'
import sinon from 'sinon'

import plugin from '.'

test('registers filter', t => {
  const config = {
    addLiquidFilter: sinon.spy()
  }

  plugin(config)
  t.true(config.addLiquidFilter.calledOnce)
})