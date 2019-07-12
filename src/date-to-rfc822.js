import decompose from './utils/decompose'

const dateToRFC822 = (date) => {
  const { dayName, day, monthName, year, hours, minutes, seconds } = decompose(
    date
  )
  return `${dayName}, ${day} ${monthName} ${year} ${hours}:${minutes}:${seconds} +0000`
}

export default dateToRFC822
