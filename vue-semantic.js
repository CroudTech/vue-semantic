var Checkbox = require('./src/Checkbox.vue'),
    Dropdown = require('./src/Dropdown.vue'),
    Message = require('./src/Message.vue'),
    Modal = require('./src/Modal.vue'),
    Popup = require('./src/Popup.vue'),
    Radiobutton = require('./src/Radiobutton.vue'),
    Statistic = require('./src/Statistic.vue');


module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-checkbox', Checkbox);
        Vue.component('semantic-dropdown', Dropdown);
        Vue.component('semantic-message', Message);
        Vue.component('semantic-modal', Modal);
        Vue.component('semantic-popup', Popup);
        Vue.component('semantic-radio', Radiobutton);
        Vue.component('semantic-statistic', Statistic);
    },
}
