const loaders = require('vue-webpack-loaders');
const webpack = require('webpack');

module.exports = {
  components: 'src/**/*.vue',
  require: [
    'jquery',
    'semantic-ui/dist/semantic.min',
    'semantic-ui/dist/semantic.min.css',
  ],
  webpackConfig: {
	module: {
	  loaders,
	},
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
  },
  styleguideDir: 'docs',
  mixins: [
    'src/utils/Styleguidist.js',
  ],
};
