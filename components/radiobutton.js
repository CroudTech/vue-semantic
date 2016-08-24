var Radiobutton = require('../src/Radiobutton.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-radio', Radiobutton);
    },
}
