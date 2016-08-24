var Rail = require('../src/Rail.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-rail', Rail);
    },
}
