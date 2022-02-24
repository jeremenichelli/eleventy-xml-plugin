import test from 'ava'
import escapeXML from './escape-xml'

test('escapes string correctly', (t) => {
  const str = '<Hey—there!>'
  const escapedStr = escapeXML(str)
  t.is(escapedStr, '&lt;Hey&mdash;there!&gt;')
})
