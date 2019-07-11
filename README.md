# eleventy-xml-plugin

[![Build Status](https://travis-ci.org/jeremenichelli/eleventy-xml-plugin.svg?branch=master)](https://travis-ci.org/jeremenichelli/eleventy-xml-plugin)

👩‍🔬 Useful set of Liquid filters for XML files composition in Eleventy projects.

_This plugins automatically adds a set of filters that Jekyll adds to the already built-in ones in Liquid template language to help you compose XML files like RSS feeds or sitemaps._

## Install

```sh
# npm
npm i eleventy-xml-plugin --save

# yarn
yarn add eleventy-xml-plugin
```

## Add plugin

Include it as a plugin in your [Eleventy](//11ty.io) project.

```js
// .eleventy.js
const xmlFiltersPlugin = require('eleventy-xml-plugin')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(xmlFiltersPlugin)
}
```

## Filters

### `date_to_rfc822`

Used in RSS feed as a valid publish date format.

```liquid
<pubDate>{{ post.date | 'date_to_rfc822' }}</pubDate>
```

### `date_to_xmlschema`

Used in sitemaps as valid last modified date format.

```liquid
<lastmod>{{ page.date | 'date_to_xmlschema' }}</lastmod>
```

### `xml_escape`

Used to safely escape HTML entities in XML files.

```liquid
<title>{{ post.data.title | 'xml_escape' }}</title>
```

_This filter uses the [html-entities](https://www.npmjs.com/package/html-entities) package under-the-hood_.


## Contributing

To contribute [Node.js](//nodejs.org) and [yarn](//yarnpkg.com) are required.

Before commit make sure to follow [conventional commits](//www.conventionalcommits.org) specification and check all tests pass by running `yarn test`.
