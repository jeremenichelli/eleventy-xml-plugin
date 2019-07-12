import test from 'ava'
import sinon from 'sinon'

import plugin from '.'
import dateToRFC822 from './date-to-rfc822'
import dateToXMLSchema from './date-to-xmlschema'
import escapeXML from './escape-xml'

test('registers filters', (t) => {
  const config = {
    addLiquidFilter: sinon.spy()
  }

  plugin(config)
  // adds 'date_to_rfc882' filter
  t.is(config.addLiquidFilter.getCall(0).args[0], 'date_to_rfc822')
  t.is(config.addLiquidFilter.getCall(0).args[1], dateToRFC822)

  // // adds 'date_to_xmlschema' filter
  t.is(config.addLiquidFilter.getCall(1).args[0], 'date_to_xmlschema')
  t.is(config.addLiquidFilter.getCall(1).args[1], dateToXMLSchema)

  // // adds 'xml_escape' filter
  t.is(config.addLiquidFilter.getCall(2).args[0], 'xml_escape')
  t.is(config.addLiquidFilter.getCall(2).args[1], escapeXML)
})
