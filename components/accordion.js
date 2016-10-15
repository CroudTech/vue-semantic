var Accordion = require('../src/Accordion.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-accordion', Accordion);
    },
}
