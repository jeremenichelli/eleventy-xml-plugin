import test from 'ava'
import escapeXML from './escape-xml'

test('escapes HTML tags', (t) => {
  const str = '<html>'
  const escapedStr = escapeXML(str)
  t.is(escapedStr, '&lt;html&gt;')
})

test('does not escape HTML entities that are invalid in XML', (t) => {
  const str = 'No need to encode “curly quotes” in XML!'
  const escapedStr = escapeXML(str)
  t.is(escapedStr, 'No need to encode “curly quotes” in XML!')
})
