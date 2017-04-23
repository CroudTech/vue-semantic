var Pagination = require('../src/Pagination.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('semantic-pagination', Pagination);
    },
}
