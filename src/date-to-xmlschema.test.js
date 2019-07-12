import test from 'ava'
import dateToXMLSchema from './date-to-xmlschema'

test('parses date correctly', (t) => {
  const date = new Date(2015, 9, 21, 7, 28, 2, 450)
  const parsedDate = dateToXMLSchema(date)
  t.is(parsedDate, '2015-10-21T07:28:02+00:00')
})
