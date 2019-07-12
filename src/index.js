import dateToRFC822 from './date-to-rfc822'
import dateToXMLSchema from './date-to-xmlschema'
import escapeXML from './escape-xml'

export default (eleventyConfig) => {
  eleventyConfig.addLiquidFilter('date_to_rfc822', dateToRFC822)
  eleventyConfig.addLiquidFilter('date_to_xmlschema', dateToXMLSchema)
  eleventyConfig.addLiquidFilter('xml_escape', escapeXML)
}
