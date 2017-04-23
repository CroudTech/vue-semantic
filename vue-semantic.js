module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-accordion', require('./src/Accordion.vue'));
        Vue.component('semantic-checkbox', require('./src/Checkbox.vue'));
        Vue.component('semantic-column', require('./src/Column.vue'));
        Vue.component('semantic-divider', require('./src/Divider.vue'));
        Vue.component('semantic-dropdown', require('./src/Dropdown.vue'));
        Vue.component('semantic-form-dropdown', require('./src/FormDropdown.vue'));
        Vue.component('semantic-label', require('./src/Label.vue'));
        Vue.component('semantic-loading', require('./src/Loading.vue'));
        Vue.component('semantic-message', require('./src/Message.vue'));
        Vue.component('semantic-modal', require('./src/Modal.vue'));
        Vue.component('semantic-popup', require('./src/Popup.vue'));
        Vue.component('semantic-radiobutton', require('./src/Radiobutton.vue'));
        Vue.component('semantic-reveal', require('./src/Reveal.vue'));
        Vue.component('semantic-search', require('./src/Search.vue'));
        Vue.component('semantic-statistic', require('./src/Statistic.vue'));
        Vue.component('semantic-example', require('./src/ElementExample.vue'));  
        Vue.component('semantic-pagination', require('./src/Pagination.vue')); 
    },
}
