import test from 'ava'
import escapeXML from './escape-xml'

test('parses string correctly', (t) => {
  const str = '&lt;Hey&mdash;there!&gt;'
  const parsedStr = escapeXML(str)
  t.is(parsedStr, '<Hey—there!>')
})
