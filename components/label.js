var Label = require('../src/Label.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-label', Label);
    },
}
