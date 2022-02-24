import { AllHtmlEntities as Entities } from 'html-entities'

const entities = new Entities()

const escapeXML = (str) => entities.encode(str)

export default escapeXML
