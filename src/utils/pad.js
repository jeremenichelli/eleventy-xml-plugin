/**
 * Receives a number and a desired length, returns a padded string
 * @method pad
 * @param {Number} number
 * @param {Number} length
 * @returns {String}
 */
const pad = (number, length) => {
  let result = number + ''
  while (result.length < length) result = '0' + result
  return result
}

export default pad
