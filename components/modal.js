var Modal = require('../src/Modal.vue')

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-modal', Modal);
    },
}
