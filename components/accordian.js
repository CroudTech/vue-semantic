var Accordian = require('../src/Accordian.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-accordian', Accordian);
    },
}
