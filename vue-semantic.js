var Checkbox = require('./src/Checkbox.vue'),
    Dropdown = require('./src/Dropdown.vue'),
    Popup = require('./src/Popup.vue'),
    Radiobutton = require('./src/Radiobutton.vue');


module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-checkbox', Checkbox);
        Vue.component('semantic-dropdown', Dropdown);
        Vue.component('semantic-popup', Popup);
        Vue.component('semantic-radio', Radiobutton);
    },
}
