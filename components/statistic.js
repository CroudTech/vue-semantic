var Statistic = require('../src/Statistic.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-statistic', Statistic);
    },
}
