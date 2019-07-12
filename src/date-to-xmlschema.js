import decompose from './utils/decompose'

const dateToXMLSchema = (date) => {
  const { day, month, year, hours, minutes, seconds } = decompose(date)
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`
}

export default dateToXMLSchema
