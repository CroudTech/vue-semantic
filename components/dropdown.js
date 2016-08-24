var FormDropdown = require('../src/FormDropdown.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-form-dropdown', FormDropdown);
    }
}
