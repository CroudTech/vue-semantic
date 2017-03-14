module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-form-dropdown', require('./src/FormDropdown.vue'));
        Vue.component('semantic-modal', require('./src/Modal.vue'));
    },
}
