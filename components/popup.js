var Popup = require('../src/Popup.vue'),

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-popup', Popup);

    },
}
