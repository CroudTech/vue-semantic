var Message = require('../src/Message.vue')

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-message', Message);
    },
}
