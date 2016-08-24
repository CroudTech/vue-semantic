var Reveal = require('../src/Reveal.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-reveal', Reveal);
    },
}
