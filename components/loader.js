var Loader = require('../src/Loader.vue')

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-loader', Loader);
    },
}
