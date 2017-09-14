# vue-semantic
[![npm version](https://badge.fury.io/js/croud-vue-semantic.svg)](https://badge.fury.io/js/croud-vue-semantic)

http://croudsupport.github.io/vue-semantic/

A collection of vue components for integrating the semantic ui library 
## Contributing
Work In Progress. Any PRs welcome.

## Vue 1?
If you still need the Vue 1 version of this lib you can use the vue1 branch or 0.0.7 tag

## Installation
You can use NPM to install this package
```bash
npm install --save croud-vue-semantic
```
or Yarn 
```bash
yarn add croud-vue-semantic
```

Install the plugin
```js
import VueSemantic from 'croud-vue-semantic'
Vue.use(VueSemantic)
```

You will also need to include the semantic js and css files to your project. The easiest way would be to include them in your html

```html
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
<script src="semantic/dist/semantic.min.js"></script>
```
For more advanced builds see http://semantic-ui.com/introduction/getting-started.html

## Usage
View our [docs](http://croudsupport.github.io/vue-semantic/) for usage examples

### Webpack Tips
If you are using webpack, you can add jQuery to your webpack.base.conf.js
```js
plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
  })
],
```

And include the semantic js + css at the top of your main.js file
```
import 'path/to/semantic.css'
import 'path/to/semantic.js'
```
