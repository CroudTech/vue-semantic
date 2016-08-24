var Icon = require('../src/Icon.vue')

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-icon', Icon);
    },
}
