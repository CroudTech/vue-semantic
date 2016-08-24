var Column = require('../src/Column.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-column', Column);
    },
}
