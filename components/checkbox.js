var Checkbox = require('../src/Checkbox.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-checkbox', Checkbox);
    },
}
