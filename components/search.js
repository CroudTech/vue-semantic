var Search = require('../src/Search.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-search', Search);
    },
}
