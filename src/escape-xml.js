import { AllHtmlEntities as Entities } from 'html-entities'

const entities = new Entities()

const escapeXML = (str) => entities.decode(str)

export default escapeXML
