import test from 'ava'
import dateToRFC822 from './date-to-rfc822'

test('parses date correctly', (t) => {
  const date = new Date(2015, 9, 21, 7, 28, 2, 450)
  const parsedDate = dateToRFC822(date)
  t.is(parsedDate, 'Wed, 21 Oct 2015 07:28:02 +0000')
})
